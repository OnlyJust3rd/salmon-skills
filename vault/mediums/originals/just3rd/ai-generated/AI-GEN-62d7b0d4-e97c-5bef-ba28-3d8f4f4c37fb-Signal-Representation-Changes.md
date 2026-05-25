---
type: "medium"
title: "Understanding Signal Representation Changes: Time Reversal and Shifting"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/signals-systems/signal-operations/microskills/signal-representation-changes|signal-representation-changes]]"
learning-time-in-minutes: 5
---
# Understanding Signal Representation Changes: Time Reversal and Shifting

This lesson explores how common signal transformations, specifically time reversal and time shifting, affect the way we represent discrete-time signals. Understanding these changes is crucial for analyzing and manipulating signals effectively in various applications.

## What is a Discrete-Time Signal Representation?

A discrete-time signal is a sequence of values indexed by integers. We often represent these signals graphically as a plot of amplitude versus time (or index), or mathematically as a function like \(x[n]\), where \(n\) is the time index.

For example, a simple discrete-time signal might be:

*   **Graphically:** A series of dots or lines connecting points on a graph.
*   **Mathematically:** \(x[n] = \{..., 0, 0, 1, 2, 1, 0, 0, ...\}\) where the values correspond to indices \(n = -2, -1, 0, 1, 2, 3, 4\). We often use an arrow to indicate \(n=0\): \(x[n] = \{..., 0, 0, \uparrow 1, 2, 1, 0, 0, ...\}\).

## Time Reversal

Time reversal, also known as flipping the signal about the vertical axis, changes the direction of time. If we have a signal \(x[n]\), its time-reversed version is denoted as \(x[-n]\).

### How Time Reversal Affects Representation

*   **Mathematical Notation:** To achieve time reversal, we replace the time index \(n\) with \(-n\). So, if \(x[n]\) is our original signal, \(x[-n]\) is its time-reversed counterpart.

*   **Graphical Representation:**
    *   The value of the signal at index \(n\) in the original signal will now appear at index \(-n\) in the reversed signal.
    *   If the original signal had its origin (where \(n=0\)) at a particular point, the reversed signal's origin will be at the same point, but the sequence of values will be mirrored around it.
    *   A signal that was causal (non-zero only for \(n \ge 0\)) becomes anti-causal (non-zero only for \(n \le 0\)) after time reversal.

### Example: Time Reversal

Let's consider the signal \(x[n]\) with the following values:

\(x[n] = \{..., 0, 0, \uparrow 1, 2, 3, 0, 0, ...\}\) for \(n = -2, -1, 0, 1, 2, 3, 4\) respectively.

To find \(y[n] = x[-n]\), we reverse the indices:

*   The value at \(n=0\) (which is 1) remains at \(n=0\).
*   The value at \(n=1\) (which is 2) moves to \(n=-1\).
*   The value at \(n=2\) (which is 3) moves to \(n=-2\).
*   The value at \(n=-1\) (which is 0) moves to \(n=1\).
*   The value at \(n=-2\) (which is 0) moves to \(n=2\).

So, the time-reversed signal \(y[n] = x[-n]\) would be:

\(y[n] = \{..., 0, 0, \uparrow 3, 2, 1, 0, 0, ...\}\) for \(n = -4, -3, -2, -1, 0, 1, 2\) respectively.

Notice how the sequence of non-zero values (1, 2, 3) is now in reverse order (3, 2, 1), and the signal's peak has moved from \(n=0\) to \(n=0\) with the entire sequence flipped around it.

## Time Shifting

Time shifting involves moving a signal forward or backward in time without changing its shape. A signal \(x[n]\) shifted by \(n_0\) units is denoted as \(x[n - n_0]\).

### How Time Shifting Affects Representation

*   **Mathematical Notation:**
    *   **Delay (Shift to the right):** If we replace \(n\) with \(n - n_0\) where \(n_0 > 0\), the signal is delayed by \(n_0\) samples. The entire signal moves to the right.
    *   **Advance (Shift to the left):** If we replace \(n\) with \(n - n_0\) where \(n_0 < 0\) (which is equivalent to \(n + |n_0|\)), the signal is advanced by \(|n_0|\) samples. The entire signal moves to the left.

*   **Graphical Representation:**
    *   The entire shape of the signal's plot is moved horizontally.
    *   If an event occurred at time \(n=k\) in the original signal, it will now occur at time \(n = k + n_0\) in the shifted signal (for a delay of \(n_0\)).
    *   The origin of the signal (where \(n=0\) for the *original* signal) will shift. If the original signal's origin was marked, the new origin of the *shifted* signal will be at \(n=n_0\).

### Example: Time Shifting

Let's use the same signal \(x[n]\):

\(x[n] = \{..., 0, 0, \uparrow 1, 2, 3, 0, 0, ...\}\) for \(n = -2, -1, 0, 1, 2, 3, 4\).

**1. Delaying the signal by 2 samples (\(n_0 = 2\)):**
We consider \(y[n] = x[n - 2]\).

*   The value that was at \(x[0]\) (which is 1) will now be at \(y[2]\) (because \(2 - 2 = 0\)).
*   The value that was at \(x[1]\) (which is 2) will now be at \(y[3]\) (because \(3 - 2 = 1\)).
*   The value that was at \(x[2]\) (which is 3) will now be at \(y[4]\) (because \(4 - 2 = 2\)).
*   The arrow indicating the original \(n=0\) point is now effectively at \(n=2\) for the new signal \(y[n]\).

\(y[n] = \{..., 0, 0, 0, 0, \uparrow 1, 2, 3, 0, ...\}\) for \(n = -2, -1, 0, 1, 2, 3, 4, 5, 6\).

**2. Advancing the signal by 1 sample (\(n_0 = -1\)):**
We consider \(z[n] = x[n - (-1)] = x[n + 1]\).

*   The value that was at \(x[0]\) (which is 1) will now be at \(z[-1]\) (because \(-1 + 1 = 0\)).
*   The value that was at \(x[1]\) (which is 2) will now be at \(z[0]\) (because \(0 + 1 = 1\)).
*   The value that was at \(x[2]\) (which is 3) will now be at \(z[1]\) (because \(1 + 1 = 2\)).
*   The arrow indicating the original \(n=0\) point is now effectively at \(n=-1\) for the new signal \(z[n]\).

\(z[n] = \{..., 0, \uparrow 1, 2, 3, 0, 0, ...\}\) for \(n = -3, -2, -1, 0, 1, 2, 3\).

## Summary of Changes

| Transformation    | Mathematical Form | Effect on Index \(n\) | Effect on Graph                                     |
| :---------------- | :---------------- | :-------------------- | :-------------------------------------------------- |
| Time Reversal     | \(x[-n]\)         | Replaced by \(-n\)    | Flipped horizontally around the vertical axis.      |
| Time Shifting     | \(x[n - n_0]\)    | Replaced by \(n - n_0\) | Shifted right by \(n_0\) if \(n_0 > 0\), left if \(n_0 < 0\). |

Understanding how these transformations alter the index \(n\) is key to correctly predicting and interpreting the resulting signal's representation, whether it's graphical or mathematical.

## Supports

- [[skills/mathematics/signals-systems/signal-operations/microskills/signal-representation-changes|Signal Representation Changes]]
