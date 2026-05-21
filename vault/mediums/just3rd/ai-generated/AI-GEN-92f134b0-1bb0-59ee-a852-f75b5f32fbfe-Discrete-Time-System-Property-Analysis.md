---
type: "medium"
title: "Analyzing Discrete-Time System Properties: Causality and Stability"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/complex-frequency-domain-analysis/microskills/discrete-time-system-property-analysis|discrete-time-system-property-analysis]]"
---
# Analyzing Discrete-Time System Properties: Causality and Stability

Understanding the behavior of discrete-time (DT) systems is crucial. Two fundamental properties we analyze are **causality** and **stability**. For DT systems, we often use the Z-transform and the concept of the Region of Convergence (ROC) to determine these properties. This lesson focuses on how to analyze these properties for DT systems.

## What are Causality and Stability?

*   **Causality:** A DT system is causal if its output at any time \(n\) depends only on present and past inputs, not on future inputs. In simpler terms, the system doesn't "know" what's going to happen in the future.
*   **Stability:** A DT system is said to be Bounded-Input Bounded-Output (BIBO) stable if every bounded input signal produces a bounded output signal. This means the system's output won't grow indefinitely for any input that doesn't grow indefinitely.

## Analyzing Properties using the Z-Transform and ROC

The Z-transform of a discrete-time LTI system's impulse response \(h[n]\) is its transfer function \(H(z)\). The poles and zeros of \(H(z)\), along with its ROC, reveal system properties.

### Causality

For a causal DT LTI system, its impulse response \(h[n]\) must be zero for all \(n < 0\). In the Z-domain, this translates to:

*   The ROC of the transfer function \(H(z)\) must be the region **outside** the outermost pole.
*   If \(H(z)\) is a rational function (a ratio of polynomials in \(z\)), the ROC being the exterior of the outermost pole is a direct indicator of causality.

### Stability

For a DT LTI system to be BIBO stable, the ROC of its transfer function \(H(z)\) must **include the unit circle**. The unit circle is defined as \(|z|=1\).

*   If the ROC includes the unit circle, then for any bounded input, the output will also be bounded.
*   If the ROC *does not* include the unit circle, the system is unstable.

## Practical Scenario: Analyzing a DT Filter

Let's consider a DT LTI system with the transfer function:

\[
H(z) = \frac{z - 0.5}{z^2 - 0.5z + 0.0625}
\]

Our goal is to analyze its causality and stability.

**Step 1: Find the poles.**
Poles are the values of \(z\) that make the denominator of \(H(z)\) equal to zero.
\(z^2 - 0.5z + 0.0625 = 0\)
Factoring the quadratic equation, we get:
\((z - 0.25)(z - 0.25) = 0\)
So, we have a repeated pole at \(z = 0.25\).

**Step 2: Determine the ROCs for causality and stability.**
*   **Causality:** For the system to be causal, the ROC must be the region outside the outermost pole. In this case, the ROC is \(|z| > 0.25\).
*   **Stability:** For the system to be stable, the ROC must include the unit circle, \(|z|=1\).

**Step 3: Analyze the properties based on the ROC.**
The pole is at \(z = 0.25\).

*   **Causality Check:** If we assume the system is causal, its ROC is \(|z| > 0.25\). Since the ROC is outside the outermost (and only) pole, the system *can* be causal.
*   **Stability Check:** The ROC for causality is \(|z| > 0.25\). Does this ROC include the unit circle \(|z|=1\)? Yes, it does, because \(1 > 0.25\).

**Conclusion:** Based on the pole location and the ROC derived from assuming causality, this DT system is **both causal and stable**.

## Practice Task

Consider a discrete-time LTI system with the transfer function:

\[
H(z) = \frac{1}{z - 2}
\]

1.  Determine the location of the pole(s).
2.  If the system is causal, what is its ROC?
3.  Is this system stable? Justify your answer.

## Self-Check Questions

1.  What is the primary condition for a DT LTI system to be causal in terms of its impulse response \(h[n]\)?
2.  How does the ROC relate to the causality of a DT LTI system?
3.  What is the condition for a DT LTI system to be BIBO stable in terms of its Z-transform's ROC?
4.  If a DT LTI system has a pole at \(z=3\), can it be both causal and stable simultaneously? Explain why or why not.

## Supports

- [[skills/mathematics/complex-frequency-domain-analysis/microskills/discrete-time-system-property-analysis|Discrete-Time System Property Analysis]]
