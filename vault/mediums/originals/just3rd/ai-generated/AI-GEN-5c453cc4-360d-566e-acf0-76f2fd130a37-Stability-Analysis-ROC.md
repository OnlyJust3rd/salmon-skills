---
type: "medium"
title: "Stability Analysis using the Region of Convergence (ROC)"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/signals-systems/complex-frequency-domain-analysis/microskills/stability-analysis-roc|stability-analysis-roc]]"
related-skills:
  - "[[skills/mathematics/signals-systems/complex-frequency-domain-analysis/complex-frequency-domain-analysis|complex-frequency-domain-analysis]]"
learning-time-in-minutes: 3
---
# Stability Analysis using the Region of Convergence (ROC)

Understanding system stability is crucial in signal processing and control systems. For Linear Time-Invariant (LTI) systems, stability is directly related to the system's transfer function and its Region of Convergence (ROC). This lesson focuses on how the ROC reveals the stability of a system.

## What is the Region of Convergence (ROC)?

The ROC is the set of values in the complex \(s\)-plane (for continuous-time systems) or the \(z\)-plane (for discrete-time systems) for which the Laplace or Z-transform of a system's impulse response converges absolutely. In simpler terms, it's the area where the mathematical representation of your system "works" without going to infinity.

## Stability and the ROC: The Key Relationship

The fundamental rule linking stability and the ROC is:

> **A causal LTI system is stable if and only if its ROC includes the unit circle in the \(z\)-plane (for discrete-time systems) or the imaginary axis in the \(s\)-plane (for continuous-time systems).**

### Continuous-Time Systems (Laplace Transform)

For a causal continuous-time system with transfer function \(H(s)\), stability is determined by the ROC of its Laplace transform. If the ROC of \(H(s)\) contains the imaginary axis (\( \text{Re}(s) = 0 \)), the system is stable. If the ROC does not contain the imaginary axis, the system is unstable.

### Discrete-Time Systems (Z-Transform)

For a causal discrete-time system with transfer function \(H(z)\), stability is determined by the ROC of its Z-transform. If the ROC of \(H(z)\) includes the unit circle (\( |z| = 1 \)), the system is stable. If the ROC does not include the unit circle, the system is unstable.

## Practical Example: Pole-Zero Plots and ROC

Consider a discrete-time system with the following transfer function:

\[
H(z) = \frac{z+0.5}{(z-0.8)(z+0.2)}
\]

This system has zeros at \(z = -0.5\) and poles at \(z = 0.8\) and \(z = -0.2\).

Now let's analyze the possible ROCs and their implications for stability:

1.  **ROC: \(|z| > 0.8\)**
    *   This ROC contains the unit circle \(|z|=1\).
    *   **Conclusion:** The system is **stable**. This ROC is associated with a causal system.

2.  **ROC: \(0.2 < |z| < 0.8\)**
    *   This ROC does *not* contain the unit circle.
    *   **Conclusion:** The system is **unstable**. This ROC is associated with a non-causal system or a system with an anti-causal component.

3.  **ROC: \(|z| < 0.2\)**
    *   This ROC does *not* contain the unit circle.
    *   **Conclusion:** The system is **unstable**. This ROC is associated with an anti-causal system.

**Key takeaway:** When examining a pole-zero plot, if the ROC for a causal system encompasses the entire unit circle (or imaginary axis for continuous-time), the system is stable. If any part of the unit circle is outside the ROC, stability is compromised.

## Practice Task

Given a continuous-time system with the transfer function:

\[
H(s) = \frac{s+2}{(s+1)(s-3)}
\]

Determine the ROC that would make this system **stable**. Describe your reasoning based on the location of the poles and the imaginary axis.

## Self-Check Questions

1.  What is the primary condition for a causal discrete-time LTI system to be stable, in terms of its ROC?
2.  If a continuous-time system's ROC is \( \text{Re}(s) > 3 \), and its poles are at \( s = -1 \) and \( s = 3 \), is it stable? Explain.
3.  Why is the concept of "causal" important when linking ROC to stability?

## Supports

- [[skills/mathematics/signals-systems/complex-frequency-domain-analysis/microskills/stability-analysis-roc|Stability Analysis (ROC)]]
