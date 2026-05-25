---
type: "medium"
title: "Executing Time Reversal on Discrete-Time Sequences"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/signals-systems/signal-operations/microskills/time-reversal-application|time-reversal-application]]"
learning-time-in-minutes: 4
---
# Executing Time Reversal on Discrete-Time Sequences

This lesson focuses on understanding and applying the time reversal operation to discrete-time signals, a fundamental technique in signal processing. You'll learn how to perform this operation practically.

## What is Time Reversal?

Time reversal, also known as folding or flipping in time, is an operation that changes the direction of the time axis of a signal. For a discrete-time signal $x[n]$, time reversal produces a new signal $y[n]$ such that the value of the signal at time $n$ in the reversed signal is equal to the value of the original signal at time $-n$.

Mathematically, the time reversal of a discrete-time signal $x[n]$ is defined as:

$$ y[n] = x[-n] $$

This means that if you have a sample of the original signal at time $n=2$, say $x[2] = 5$, then in the time-reversed signal, the sample at time $n=-2$ will have that value, i.e., $y[-2] = x[-(-2)] = x[2] = 5$. Similarly, a sample at $n=-3$ in the original signal, $x[-3] = 7$, will appear at $n=3$ in the reversed signal, $y[3] = x[-3] = 7$. The sample at $n=0$ remains unchanged ($y[0] = x[-0] = x[0]$).

## Visualizing Time Reversal

Imagine your discrete-time signal as a sequence of values plotted against discrete time points. Time reversal essentially mirrors this sequence across the $n=0$ axis.

*   **Positive time instances** in the original signal become **negative time instances** in the reversed signal.
*   **Negative time instances** in the original signal become **positive time instances** in the reversed signal.
*   The **zero time instance** ($n=0$) remains at its position.

## How to Apply Time Reversal to a Discrete-Time Sequence

Applying time reversal to a discrete-time sequence involves systematically changing the indices of the samples.

**Steps:**

1.  **Identify the sequence:** Have your discrete-time sequence $x[n]$ clearly defined, usually by listing its samples for specific time indices.
2.  **Negate each time index:** For every sample $x[n]$ in the original sequence, consider the corresponding sample in the reversed sequence $y[n]$ to be at time $-n$.
3.  **Map the values:** The value of the original sample $x[n]$ is now located at time $-n$ in the reversed sequence, so $y[-n] = x[n]$.

### Worked Example: Simple Sequence

Let's consider a simple discrete-time sequence $x[n]$ defined as:

*   $x[-2] = 1$
*   $x[-1] = 2$
*   $x[0] = 3$
*   $x[1] = 4$
*   $x[2] = 5$
*   $x[n] = 0$ for all other $n$.

We want to find the time-reversed sequence $y[n] = x[-n]$.

Let's apply the rule $y[-n] = x[n]$ for each non-zero sample:

*   For $x[-2] = 1$: We set $n = -2$. Then $y[-(-2)] = y[2] = x[-2] = 1$.
*   For $x[-1] = 2$: We set $n = -1$. Then $y[-(-1)] = y[1] = x[-1] = 2$.
*   For $x[0] = 3$: We set $n = 0$. Then $y[-0] = y[0] = x[0] = 3$.
*   For $x[1] = 4$: We set $n = 1$. Then $y[-1] = x[1] = 4$.
*   For $x[2] = 5$: We set $n = 2$. Then $y[-2] = x[2] = 5$.

So, the time-reversed sequence $y[n]$ is:

*   $y[-2] = 5$
*   $y[-1] = 4$
*   $y[0] = 3$
*   $y[1] = 2$
*   $y[2] = 1$
*   $y[n] = 0$ for all other $n$.

Notice how the sequence has been flipped around $n=0$. The sample that was at $n=2$ is now at $n=-2$, and the sample that was at $n=-2$ is now at $n=2$.

### Worked Example: Sequence with Non-Consecutive Indices

Consider the sequence $g[n]$:

*   $g[-3] = 2$
*   $g[-1] = 4$
*   $g[0] = 6$
*   $g[2] = 8$
*   $g[n] = 0$ for all other $n$.

Let $h[n] = g[-n]$.

*   For $g[-3] = 2$, $n=-3$. So, $h[-(-3)] = h[3] = g[-3] = 2$.
*   For $g[-1] = 4$, $n=-1$. So, $h[-(-1)] = h[1] = g[-1] = 4$.
*   For $g[0] = 6$, $n=0$. So, $h[-0] = h[0] = g[0] = 6$.
*   For $g[2] = 8$, $n=2$. So, $h[-2] = g[2] = 8$.

The time-reversed sequence $h[n]$ is:

*   $h[-2] = 8$
*   $h[-1] = 0$ (since $g[1]$ was 0)
*   $h[0] = 6$
*   $h[1] = 4$
*   $h[2] = 0$ (since $g[-2]$ was 0)
*   $h[3] = 2$
*   $h[n] = 0$ for all other $n$.

### Common Mistakes to Avoid

*   **Confusing time reversal with time shifting:** Time shifting changes the position of the signal along the time axis ($x[n-k]$), while time reversal flips it ($x[-n]$). Both are distinct operations.
*   **Incorrectly handling the $n=0$ sample:** The sample at $n=0$ in the original signal remains at $n=0$ in the time-reversed signal.
*   **Assuming symmetry:** Not all signals are symmetric around $n=0$. Time reversal will reveal the asymmetry by flipping the signal.

## Practical Applications

Time reversal is a crucial operation in various signal processing applications, including:

*   **Correlation and Convolution:** Understanding time reversal is essential for grasping how to compute correlation and convolution, which are fundamental operations for analyzing signals and systems. For instance, the cross-correlation of two signals involves one signal being time-reversed.
*   **System Analysis:** Analyzing the impulse response of a system often involves time reversal.
*   **Image Processing:** In 2D signal processing (images), time reversal can be analogous to flipping an image horizontally or vertically.

By mastering the execution of time reversal on discrete-time sequences, you build a strong foundation for more complex signal operations.

## Supports

- [[skills/mathematics/signals-systems/signal-operations/microskills/time-reversal-application|Time Reversal Application]]
