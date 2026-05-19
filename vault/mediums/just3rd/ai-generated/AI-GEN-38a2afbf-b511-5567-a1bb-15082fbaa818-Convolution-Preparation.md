---
type: "medium"
title: "Convolution Preparation: Shifting and Flipping Signals"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/signal-operations/microskills/convolution-preparation|Convolution Preparation]]"
---
# Convolution Preparation: Shifting and Flipping Signals

This lesson focuses on preparing signals for convolution by applying time reversal and time shifting operations. These operations are fundamental building blocks for understanding and performing convolution, a key process in signal processing.

## What is Convolution Preparation?

In the context of signal operations, preparing signals for convolution involves manipulating them in specific ways to facilitate the convolution calculation. The two primary preparatory operations are:

*   **Time Reversal (Flipping):** This involves reversing the signal in time. If a signal is represented as $x(t)$, its time-reversed version is $x(-t)$.
*   **Time Shifting:** This involves moving the signal forward or backward in time. If a signal is $x(t)$, a time-shifted version might be $x(t - \tau)$ or $x(t + \tau)$, where $\tau$ represents the amount of shift.

These operations are crucial because convolution itself involves folding one signal and sliding it across another, requiring a clear understanding of how these individual signal manipulations work.

## Understanding Time Reversal (Flipping)

Time reversal, often referred to as "flipping" the signal, means mirroring the signal around the vertical axis (the time axis).

**Conceptual Example:**

Imagine a signal $x(t)$ that looks like a simple pulse.

*   **Original Signal $x(t)$:**
    ```
    ^ amplitude
    |
    |   ____
    |  |    |
    |__|____|______> time
       0    1
    ```

*   **Time-Reversed Signal $x(-t)$:**
    ```
    ^ amplitude
    |
    |    ____
    |   |    |
    |___|____|______> time
      -1   0
    ```

Notice how the pulse, which was originally from time 0 to 1, is now from time -1 to 0. The shape remains the same, but its position relative to the origin is reversed.

**Mathematical Representation:**

For a discrete-time signal $x[n]$, the time-reversed version is $x[-n]$.
For a continuous-time signal $x(t)$, the time-reversed version is $x(-t)$.

## Understanding Time Shifting

Time shifting moves a signal along the time axis.

*   **Time Delay (Shifting to the Right):** A shift by $\tau$ units to the right is represented as $x(t - \tau)$ for continuous-time signals or $x[n - k]$ for discrete-time signals. The entire signal appears later in time.

*   **Time Advance (Shifting to the Left):** A shift by $\tau$ units to the left is represented as $x(t + \tau)$ for continuous-time signals or $x[n + k]$ for discrete-time signals. The entire signal appears earlier in time.

**Conceptual Example:**

Let's use the same pulse signal, shifted by 2 units to the right.

*   **Original Signal $x(t)$:**
    ```
    ^ amplitude
    |
    |   ____
    |  |    |
    |__|____|______> time
       0    1
    ```

*   **Time-Delayed Signal $x(t - 2)$:**
    ```
    ^ amplitude
    |
    |       ____
    |      |    |
    |______|____|____> time
           2    3
    ```

The pulse, which was from 0 to 1, is now from 2 to 3.

## Combining Operations for Convolution

Convolution involves folding one signal and shifting it. The "folding" part is precisely time reversal. The "sliding" part is time shifting.

When preparing to convolve two signals, say $x(t)$ and $h(t)$, to find $y(t) = x(t) * h(t)$, we typically perform the following steps conceptually:

1.  **Time Reverse one of the signals:** Let's say we reverse $h(t)$ to get $h(-\tau)$.
2.  **Shift the reversed signal:** We shift $h(-\tau)$ by $t$ units to get $h(t - \tau)$.
3.  **Multiply and Integrate (or Sum):** For each specific time $t$, we multiply $x(\tau)$ by $h(t - \tau)$ for all possible $\tau$ and then integrate (or sum) the result.

$$ y(t) = \int_{-\infty}^{\infty} x(\tau) h(t - \tau) d\tau $$

$$ y[n] = \sum_{k=-\infty}^{\infty} x[k] h[n - k] $$

### Worked Example: Discrete-Time Signals

Let's prepare signals $x[n]$ and $h[n]$ for convolution.

**Signal 1:** $x[n]$
$x[0] = 1$
$x[1] = 2$
$x[2] = 1$
(Assume $x[n] = 0$ for other values of $n$)

**Signal 2:** $h[n]$
$h[0] = 1$
$h[1] = 0.5$
(Assume $h[n] = 0$ for other values of $n$)

**Step 1: Time Reverse $h[n]$ to get $h[-n]$.**

| $n$  | $h[n]$ | $h[-n]$ |
| :--- | :----- | :------ |
| 0    | 1      | 1       |
| 1    | 0.5    | 0       |
| -1   | 0      | 0.5     |

So, $h[-n]$ has:
$h[-0] = h[0] = 1$
$h[-1] = h[1] = 0.5$

Let's represent $h[-n]$ explicitly:
$h[-n]$ is non-zero at $n=0$ and $n=1$. No, this is incorrect. $h[-n]$ is non-zero where $-n$ corresponds to a non-zero index of $h[n]$.
$h[n]$ is non-zero at $n=0$ and $n=1$.
So, $h[-n]$ will be non-zero when $-n = 0$ (which means $n=0$) and when $-n = 1$ (which means $n=-1$).

Corrected $h[-n]$:
$h[-1] = 0.5$
$h[0] = 1$

**Step 2: Consider Time Shifting $h[-n]$ to $h[t - n]$ (or $h[k-n]$ in summation form).**

For convolution, we need to consider $h[k-n]$ for various values of $k$. Let's see what $h[1-n]$ looks like.

$h[1-n]$ means we replace $n$ in $h[-n]$ with $(1-n)$.
So, if $h[-n]$ is non-zero at index $m$, then $h[1-n]$ is non-zero when $1-n = m$.

From $h[-n]$:
*   $h[-1] = 0.5$. So, $h[1-n]$ will be $0.5$ when $1-n = -1$, which means $n=2$.
*   $h[0] = 1$. So, $h[1-n]$ will be $1$ when $1-n = 0$, which means $n=1$.

So, $h[1-n]$ has:
$h[1-1] = h[0] = 1$
$h[1-2] = h[-1] = 0.5$

This is a conceptual preparation for the convolution sum. The actual convolution process will involve sliding this $h[k-n]$ (or $h[n-k]$) across $x[k]$ and summing the products.

## Key Takeaways

*   Time reversal flips a signal about the vertical axis.
*   Time shifting moves a signal left or right along the time axis.
*   These operations are fundamental to understanding and performing convolution.
*   For convolution $y[n] = x[n] * h[n]$, you conceptually reverse one signal (e.g., $h[n]$ to $h[-n]$) and then systematically shift it ($h[k-n]$) across the other signal ($x[k]$).

## Supports

- [[skills/mathematics/signal-operations/microskills/convolution-preparation|Convolution Preparation]]
