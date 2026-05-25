---
type: "medium"
title: "Stability and Transform Properties"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/signals-systems/complex-frequency-domain-analysis/microskills/stability-relationship-transforms|stability-relationship-transforms]]"
learning-time-in-minutes: 4
---
# Stability and Transform Properties

Understanding how poles, zeros, and the Region of Convergence (ROC) of Laplace and Z-transforms tell us about a system's stability is crucial for analyzing signals and systems.

## What is System Stability?

A system is considered stable if its output remains bounded for any bounded input. In simpler terms, a stable system won't "blow up" or produce infinitely large outputs when given a reasonable input.

## Poles, Zeros, and the ROC

*   **Poles:** These are the values of \(s\) (for Laplace transforms) or \(z\) (for Z-transforms) where the system's transfer function becomes infinite. They are the roots of the denominator of the transfer function.
*   **Zeros:** These are the values of \(s\) or \(z\) where the system's transfer function becomes zero. They are the roots of the numerator of the transfer function.
*   **Region of Convergence (ROC):** This is the set of \(s\) or \(z\) values for which the Laplace or Z-transform converges (i.e., is finite). The ROC is critical because it helps uniquely determine the time-domain impulse response from the transform.

## Connecting Stability to Transform Properties

The location of poles and zeros, along with the shape and extent of the ROC, directly dictates system stability.

### Laplace Transform and Stability

For a system described by its Laplace transform \(H(s)\):

*   **Stability Condition:** A Linear Time-Invariant (LTI) system is stable if and only if the ROC of its Laplace transform includes the imaginary axis (i.e., the line \( \text{Re}(s) = 0 \)).
*   **Pole Location:** This implies that for a stable system, all poles of \(H(s)\) must lie in the left half of the \(s\)-plane (i.e., \( \text{Re}(s) < 0 \)). If any pole is on the imaginary axis or in the right half-plane, the system is unstable.

### Z-Transform and Stability

For a system described by its Z-transform \(H(z)\):

*   **Stability Condition:** An LTI system is stable if and only if the ROC of its Z-transform includes the unit circle (i.e., \( |z| = 1 \)).
*   **Pole Location:** For a stable system, all poles of \(H(z)\) must lie *inside* the unit circle (i.e., \( |z| < 1 \)). If any pole is on or outside the unit circle, the system is unstable.

### The Role of the ROC

The ROC is not just a boundary; it's a region that defines the system's behavior. For causal systems, the ROC is typically outside the outermost pole for the Z-transform and to the right of the rightmost pole for the Laplace transform. The ROC's relationship to the imaginary axis (Laplace) or the unit circle (Z-transform) is the direct indicator of stability.

## Practical Scenario

Imagine you are designing a digital filter for audio processing. You derive the filter's transfer function \(H(z)\) and find its poles are at \(z = 0.5\) and \(z = -0.8\).

1.  **Pole Locations:** Both poles, \(0.5\) and \(-0.8\), have magnitudes less than 1 (\( |0.5| < 1 \) and \( |-0.8| < 1 \)).
2.  **ROC:** Since the system is likely causal (a common requirement for digital filters), the ROC will be \( |z| > 0.8 \).
3.  **Stability Check:** Does the ROC \( |z| > 0.8 \) include the unit circle \( |z| = 1 \)? Yes, it does.
4.  **Conclusion:** This digital filter is stable because all its poles are inside the unit circle and its ROC encompasses the unit circle. If, however, a pole was found at \(z = 1.2\), the filter would be unstable.

## Practice Task

Consider a system with the following Laplace transform:
\[ H(s) = \frac{s+1}{(s+2)(s-3)} \]
Determine if this system is stable. Explain your reasoning based on the pole locations and the ROC.

## Self-Check Questions

1.  For a stable LTI system analyzed using the Z-transform, where must all of its poles lie?
2.  What geometric shape in the \(s\)-plane must the ROC of a stable system's Laplace transform contain?
3.  If a system's Z-transform has a pole at \(z = 1\), is the system guaranteed to be unstable? Why or why not?

## Supports

- [[skills/mathematics/signals-systems/complex-frequency-domain-analysis/microskills/stability-relationship-transforms|Stability Relationship (Transforms)]]
