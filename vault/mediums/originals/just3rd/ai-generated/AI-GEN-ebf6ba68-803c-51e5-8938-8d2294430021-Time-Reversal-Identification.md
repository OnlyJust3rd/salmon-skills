---
type: "medium"
title: "Identifying Time Reversal in Signals"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/signals-systems/signal-operations/microskills/time-reversal-identification|time-reversal-identification]]"
related-skills:
  - "[[skills/mathematics/signals-systems/signal-operations/signal-operations|signal-operations]]"
learning-time-in-minutes: 6
---
# Identifying Time Reversal in Signals

This lesson focuses on a fundamental operation in signal processing: **time reversal**, also known as **flipping**. Understanding how to identify this operation is a key step in analyzing and manipulating signals.

## What is Time Reversal?

Time reversal, or flipping, is an operation where a signal's time axis is reversed. Imagine looking at a signal in a mirror – the part that was on the left (earlier times) now appears on the right (later times), and vice-versa.

Mathematically, if we have a signal denoted as $x(t)$, its time-reversed version is represented as $x(-t)$.

*   **For discrete-time signals**, if the original signal is $x[n]$, the time-reversed signal is $x[-n]$. This means that the sample at index $n$ in the original signal moves to index $-n$ in the reversed signal.

*   **For continuous-time signals**, if the original signal is $x(t)$, the time-reversed signal is $x(-t)$. This means that the value of the signal at time $t$ in the original signal moves to time $-t$ in the reversed signal.

### Key Characteristics of Time Reversal:

*   **Symmetry around zero:** A time-reversed signal will have its energy or shape mirrored across the vertical axis (time 0).
*   **Direction reversal:** The progression of time is essentially reversed. What happens "later" in the original signal happens "earlier" in the reversed signal, and vice versa.

## How to Identify Time Reversal:

The easiest way to identify time reversal is by comparing the original signal to its transformed version. Look for these patterns:

1.  **Observe the time axis:** Is the direction of time flipped? If a signal starts at $t=0$ and ends at $t=5$ in its original form, a time-reversed version might start at $t=-5$ and end at $t=0$.

2.  **Examine the shape:** Does the shape of the signal appear to be a mirror image of itself, reflected across the vertical axis (where time equals zero)?

3.  **Check key points:** Identify significant points in the signal, such as peaks, troughs, or the beginning/end of a pulse. See if these points have been mirrored.

### Example: Continuous-Time Signal

Let's consider a simple continuous-time signal $x(t)$ which is a triangular pulse defined for $-2 \le t \le 2$:

$$
x(t) = \begin{cases}
1 + \frac{t}{2} & \text{for } -2 \le t \le 0 \\
1 - \frac{t}{2} & \text{for } 0 < t \le 2 \\
0 & \text{otherwise}
\end{cases}
$$

This signal starts at $t=-2$, reaches a peak of 1 at $t=0$, and ends at $t=2$.

Now, let's look at its time-reversed version, $y(t) = x(-t)$:

If we substitute $-t$ for $t$ in the definition of $x(t)$:

*   When $t$ is between $-2$ and $0$ (i.e., $-2 \le t \le 0$), then $-t$ is between $0$ and $2$ (i.e., $0 \le -t \le 2$). So, $x(-t) = 1 - \frac{(-t)}{2} = 1 + \frac{t}{2}$.
*   When $t$ is between $0$ and $2$ (i.e., $0 < t \le 2$), then $-t$ is between $-2$ and $0$ (i.e., $-2 \le -t < 0$). So, $x(-t) = 1 + \frac{(-t)}{2} = 1 - \frac{t}{2}$.

Therefore, the time-reversed signal $y(t) = x(-t)$ is:

$$
y(t) = \begin{cases}
1 - \frac{t}{2} & \text{for } -2 \le t \le 0 \\
1 + \frac{t}{2} & \text{for } 0 < t \le 2 \\
0 & \text{otherwise}
\end{cases}
$$

**Observation:**
*   The original signal $x(t)$ starts at $t=-2$ and ends at $t=2$.
*   The time-reversed signal $y(t) = x(-t)$ starts at $t=-2$ and ends at $t=2$. However, if we look at the *values*, at $t=-2$, $x(t)$ is 0, while $y(t)$ is $1 - \frac{(-2)}{2} = 1+1=2$. At $t=2$, $x(t)$ is 0, while $y(t)$ is $1 + \frac{2}{2} = 1+1=2$. This is confusing.

Let's redefine our original signal to be simpler for visual clarity.

Let $x(t)$ be a signal that is 1 from $t=1$ to $t=3$, and 0 otherwise.
So, $x(t) = 1$ for $1 \le t \le 3$, and $x(t)=0$ otherwise.

The time-reversed signal $y(t) = x(-t)$ will be 1 when $-t$ is between 1 and 3.
This means $1 \le -t \le 3$.
Multiplying by -1 and reversing the inequality signs, we get $-3 \le t \le -1$.
So, $y(t) = 1$ for $-3 \le t \le -1$, and $y(t)=0$ otherwise.

**Comparison:**

*   Original signal $x(t)$: Non-zero from $t=1$ to $t=3$. Starts at $t=1$, ends at $t=3$.
*   Time-reversed signal $y(t) = x(-t)$: Non-zero from $t=-3$ to $t=-1$. Starts at $t=-3$, ends at $t=-1$.

Visually, if you plot $x(t)$ and then plot $y(t)$, you'll see that the pulse has been "flipped" horizontally. The pulse that was on the positive time axis now appears on the negative time axis, and its direction of progression is reversed.

### Example: Discrete-Time Signal

Consider a discrete-time signal $x[n]$:

$x = [\dots, 0, 0, 1, 2, 1, 0, 0, \dots]$
Indices: $\dots, -3, -2, -1, 0, 1, 2, 3, \dots$

Here, the peak value of 2 is at index $n=0$. The value 1 is at $n=-1$ and $n=1$.

Let's find the time-reversed signal $y[n] = x[-n]$. We replace $n$ with $-n$:

*   When $n=1$, $y[1] = x[-1] = 1$.
*   When $n=0$, $y[0] = x[-0] = x[0] = 2$.
*   When $n=-1$, $y[-1] = x[-(-1)] = x[1] = 1$.
*   For other integer values of $n$, $x[-n]$ will be 0.

So, the time-reversed signal $y[n]$ is:

$y = [\dots, 0, 0, 1, 2, 1, 0, 0, \dots]$
Indices: $\dots, -3, -2, -1, 0, 1, 2, 3, \dots$

Wait, this looks the same! This is a special case. This signal is **time-symmetric** around $n=0$, meaning $x[n] = x[-n]$. Therefore, time reversal does not change its appearance.

Let's try a signal that is not symmetric.

Consider $x[n]$:
$x = [\dots, 0, 0, 1, 2, 3, 0, 0, \dots]$
Indices: $\dots, -3, -2, -1, 0, 1, 2, 3, \dots$

Here, the peak value of 3 is at index $n=1$. The value 2 is at $n=0$. The value 1 is at $n=-1$.

Now, let's find $y[n] = x[-n]$:

*   When $n=1$, $y[1] = x[-1] = 1$.
*   When $n=0$, $y[0] = x[-0] = x[0] = 2$.
*   When $n=-1$, $y[-1] = x[-(-1)] = x[1] = 3$.
*   When $n=2$, $y[2] = x[-2] = 0$.
*   When $n=-2$, $y[-2] = x[-(-2)] = x[2] = 0$.

So, the time-reversed signal $y[n]$ is:

$y = [\dots, 0, 0, 3, 2, 1, 0, 0, \dots]$
Indices: $\dots, -3, -2, -1, 0, 1, 2, 3, \dots$

**Comparison:**

*   Original signal $x[n]$: Non-zero values at $n=-1, 0, 1$. Peak at $n=1$.
*   Time-reversed signal $y[n]$: Non-zero values at $n=-1, 0, 1$. Peak at $n=-1$.

Visually, the sequence of values has been reversed. The value that was at index 1 is now at index -1, the value at index 0 stays at index 0, and the value at index -1 is now at index 1. The "direction" of the non-zero part of the signal has flipped.

## Common Mistakes to Avoid

*   **Confusing time reversal with time shifting:** Time shifting moves the signal along the time axis (e.g., $x(t-T)$), while time reversal flips it across the $t=0$ axis (e.g., $x(-t)$).
*   **Assuming symmetry:** Not all signals are time-symmetric. If $x(t) \neq x(-t)$, then time reversal changes the signal.
*   **Misinterpreting discrete indices:** For discrete signals, remember that $x[-n]$ means finding the value from the *original* signal at the *negative* of the current index.

## Summary

Identifying time reversal involves recognizing when a signal's time axis has been flipped. This means the signal's history is played backward. By comparing the original signal with its potential time-reversed counterpart and observing the mirroring effect across the vertical axis, you can accurately identify this fundamental signal operation.

## Supports

- [[skills/mathematics/signals-systems/signal-operations/microskills/time-reversal-identification|Time Reversal Identification]]
