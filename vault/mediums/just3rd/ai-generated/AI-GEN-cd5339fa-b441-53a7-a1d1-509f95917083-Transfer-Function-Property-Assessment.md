---
type: "medium"
title: "Transfer Function Property Assessment: Causality and Stability"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/complex-frequency-domain-analysis/microskills/transfer-function-property-assessment|Transfer Function Property Assessment]]"
---
# Transfer Function Property Assessment: Causality and Stability

In our journey through complex frequency domain analysis, understanding system properties is crucial. This lesson focuses on how to **analyze system properties like causality and stability directly from a system's transfer function.** This is a key step in mastering the outcome of analyzing system properties.

## What are Causality and Stability?

*   **Causality:** A system is **causal** if its output at any time depends only on present and past inputs, not on future inputs. In simpler terms, a causal system doesn't "know the future." For practical, real-world systems (like your audio amplifier or a physical process controller), causality is a fundamental requirement.

*   **Stability:** A system is **stable** if its output remains bounded (doesn't grow infinitely large) for any bounded input. An unstable system can produce an output that grows uncontrollably, potentially leading to system failure or undesirable behavior.

## Analyzing from the Transfer Function

The transfer function, \(H(s)\) for continuous-time systems or \(H(z)\) for discrete-time systems, provides a powerful way to determine these properties by examining the **locations of its poles**.

### Continuous-Time Systems (using \(H(s)\))

For a continuous-time system described by its transfer function \(H(s)\):

*   **Causality:** A Linear Time-Invariant (LTI) system is causal if and only if the Region of Convergence (ROC) of its Laplace Transform \(H(s)\) includes the imaginary axis (\(\sigma = 0\)). When analyzing the transfer function as a rational function (a ratio of polynomials in \(s\)), this means that the ROC must extend to infinity along the imaginary axis. For proper rational transfer functions (degree of numerator less than or equal to degree of denominator), this is generally true unless poles are in the right-half plane.

*   **Stability:** An LTI system is **Bilateral Laplace Transform** (or BIBO) stable if and only if all the poles of its transfer function \(H(s)\) lie in the **left-half of the s-plane** (i.e., have negative real parts).

### Discrete-Time Systems (using \(H(z)\))

For a discrete-time system described by its transfer function \(H(z)\):

*   **Causality:** A discrete-time LTI system is causal if and only if the ROC of its Z-Transform \(H(z)\) **encloses the unit circle** \(|z|=1\). When \(H(z)\) is a rational function, this means the ROC is of the form \(|z| > r\) or \(|z| < r\), and the unit circle must be within this region.

*   **Stability:** A discrete-time LTI system is BIBO stable if and only if all the poles of its transfer function \(H(z)\) lie **inside or on the unit circle** in the z-plane (i.e., \(|p| \le 1\) for all poles \(p\)). If any pole lies strictly outside the unit circle, the system is unstable.

## Practical Scenario: Designing a Control System

Imagine you are designing a control system for a robot arm. You've derived the transfer function for a proposed controller as:

For continuous-time: \(H(s) = \frac{s+1}{(s+2)(s+3)}\)

Let's analyze this:

1.  **Poles:** The poles are the values of \(s\) that make the denominator zero: \(s = -2\) and \(s = -3\).
2.  **Causality:** Both poles are in the left-half plane. For a rational transfer function, if all poles are in the left-half plane, the ROC will typically include the imaginary axis, implying causality.
3.  **Stability:** Both poles, \(-2\) and \(-3\), have negative real parts. Therefore, all poles are in the left-half of the s-plane, indicating the system is stable.

Now consider another transfer function: \(H(s) = \frac{1}{s-1}\)

1.  **Poles:** The pole is at \(s = 1\).
2.  **Causality:** This pole is in the right-half plane. If we assume a causal system, the ROC would be \(|z|>1\), which doesn't include the imaginary axis. So, this transfer function *cannot* represent a causal system if the ROC is assumed to be the right-most possible.
3.  **Stability:** The pole is at \(s=1\), which has a positive real part. This pole is in the right-half of the s-plane, indicating the system is **unstable**.

## Practice Task

Given the following discrete-time transfer function:

\(H(z) = \frac{z}{(z-0.5)(z-1)}\)

Determine if the system represented by this transfer function is:

1.  Causal.
2.  Stable.

## Self-Check Questions

1.  What is the primary characteristic of the pole locations that determines the stability of a continuous-time LTI system?
2.  If a discrete-time system's transfer function has a pole at \(z = 1.2\), is the system stable? Why or why not?
3.  For a transfer function to represent a causal system, what must be true about its Region of Convergence (ROC) in the z-plane?
4.  What is the mathematical condition for stability of a continuous-time LTI system based on its pole locations?

## Supports

- [[skills/mathematics/complex-frequency-domain-analysis/microskills/transfer-function-property-assessment|Transfer Function Property Assessment]]
