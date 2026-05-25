---
type: "medium"
title: "Discrete-Time Convolution: The Definition"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/signals-systems/lti-system-analysis/microskills/discrete-time-convolution-definition|discrete-time-convolution-definition]]"
learning-time-in-minutes: 3
---
# Discrete-Time Convolution: The Definition

Welcome to this lesson on understanding the mathematical definition of discrete-time convolution. This is a foundational concept for analyzing Linear Time-Invariant (LTI) systems, and mastering its definition is crucial for computing the output of such systems.

## What is Discrete-Time Convolution?

In the context of LTI systems, convolution is the mathematical operation that describes how the output signal is produced from an input signal and the system's impulse response. Think of it as a way to "blend" the input signal with the system's characteristics over time.

The formal definition of discrete-time convolution for two sequences, $x[n]$ (the input signal) and $h[n]$ (the impulse response), to produce the output sequence $y[n]$ is given by:

$$
y[n] = x[n] * h[n] = \sum_{k=-\infty}^{\infty} x[k] h[n-k]
$$

Let's break down this formula.

### Understanding the Formula Components

*   **$y[n]$**: This is the output signal at discrete time instant $n$.
*   **$x[n]$**: This is the input signal at discrete time instant $n$.
*   **$h[n]$**: This is the impulse response of the LTI system. The impulse response is the output of the system when the input is a unit impulse signal, $\delta[n]$.
*   **$*$**: This symbol denotes the convolution operation.
*   **$\sum_{k=-\infty}^{\infty}$**: This is a summation over all possible values of $k$, from negative infinity to positive infinity. This signifies that we are summing up contributions from the entire duration of the signals.
*   **$x[k]$**: This represents the input signal indexed by $k$. We are essentially taking snapshots of the input signal.
*   **$h[n-k]$**: This is the crucial part. It represents the impulse response *flipped* and *shifted*.
    *   **Flipping**: The term $h[-k]$ means that the impulse response $h[k]$ is reversed around $k=0$.
    *   **Shifting**: The term $h[n-k]$ means that the flipped impulse response is shifted by $n$ time units.

The convolution formula can also be written in an equivalent form by substituting $m = n-k$, which implies $k = n-m$:

$$
y[n] = \sum_{m=-\infty}^{\infty} x[n-m] h[m]
$$

Both formulas will yield the same result. The first form ($x[k]h[n-k]$) is often more intuitive for visualizing the process: you flip and shift the impulse response and multiply it with the input signal at each point. The second form ($x[n-m]h[m]$) is equally valid and sometimes easier for algebraic manipulation.

## The Intuition Behind the Formula

Imagine you have a system with an impulse response $h[n]$. This response describes how the system reacts to a single, instantaneous "kick" (the impulse). When you apply a continuous input signal $x[n]$, you can think of $x[n]$ as a sum of scaled and shifted impulses:

$$
x[n] = \sum_{k=-\infty}^{\infty} x[k] \delta[n-k]
$$

Since the system is LTI, the response to a scaled and shifted impulse is a scaled and shifted version of the system's impulse response. Therefore, the output $y[n]$ due to the input $x[n]$ is the sum of the responses to each individual impulse component of $x[n]$:

$$
y[n] = \sum_{k=-\infty}^{\infty} x[k] \cdot (\text{response to } \delta[n-k])
$$

The response to $\delta[n-k]$ is $h[n-k]$ (the impulse response shifted by $k$). So, combining these gives us:

$$
y[n] = \sum_{k=-\infty}^{\infty} x[k] h[n-k]
$$

This is precisely the definition of discrete-time convolution.

## Key Takeaways

*   Discrete-time convolution is the fundamental operation to find the output of an LTI system given its input and impulse response.
*   The formula involves summing the product of the input sequence and a time-reversed and time-shifted version of the impulse response.
*   The summation is over all possible time indices.
*   Understanding this definition is the first step to applying convolution to solve LTI system problems.

In the next steps, we will see how to practically compute convolution using this definition.

## Supports

- [[skills/mathematics/signals-systems/lti-system-analysis/microskills/discrete-time-convolution-definition|Discrete-Time Convolution Definition]]
