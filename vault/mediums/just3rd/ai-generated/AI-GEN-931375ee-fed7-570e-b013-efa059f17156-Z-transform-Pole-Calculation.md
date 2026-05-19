---
type: "medium"
title: "Z-transform Pole Calculation"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/complex-frequency-domain-analysis/microskills/z-transform-pole-calculation|Z-transform Pole Calculation]]"
---
# Z-transform Pole Calculation

In the realm of signal processing and control systems, the Z-transform is a powerful tool for analyzing discrete-time signals and systems. A crucial aspect of this analysis involves understanding the system's behavior through its poles and zeros. This lesson focuses specifically on calculating the poles of a Z-transform function.

Poles are the values of \(z\) for which the Z-transform function approaches infinity. They are determined by finding the roots of the denominator of the transfer function. Understanding pole locations is key to determining system stability and frequency response characteristics.

## Practical Example: Calculating Poles for a Digital Filter

Consider a digital filter represented by the following transfer function:

\[
H(z) = \frac{z+1}{z^2 - 3z + 2}
\]

To find the poles of this filter, we need to identify the values of \(z\) that make the denominator equal to zero. We set the denominator polynomial to zero and solve for \(z\):

\[
z^2 - 3z + 2 = 0
\]

This is a quadratic equation. We can solve it by factoring or using the quadratic formula. Factoring the equation, we get:

\[
(z - 1)(z - 2) = 0
\]

Therefore, the roots are \(z = 1\) and \(z = 2\).

The poles of the Z-transform \(H(z)\) are at \(z = 1\) and \(z = 2\).

## Why are Poles Important?

The location of poles in the \(z\)-plane provides vital information about the system's behavior:

*   **Stability:** For a causal discrete-time system to be stable, all its poles must lie inside the unit circle (i.e., \(|z| < 1\)). In our example, the poles are at \(z=1\) and \(z=2\). Since \(|2| > 1\), this particular system would be unstable.
*   **Frequency Response:** Poles, along with zeros, significantly shape the frequency response of a system. Their proximity to the unit circle influences which frequencies are amplified or attenuated.

## Practice Task

Calculate the poles for the following Z-transform functions:

1.  \[
    G(z) = \frac{3z}{z^2 - 0.5z + 0.06}
    \]
2.  \[
    F(z) = \frac{z-0.5}{z^2 + 0.8z}
    \]
3.  \[
    H(z) = \frac{5}{2z^2 - 7z + 3}
    \]

## Self-Check Questions

1.  What does it mean mathematically for a value of \(z\) to be a pole of a Z-transform?
2.  How do you find the poles of a rational Z-transform function?
3.  In the context of system stability for a causal system, what condition must the poles satisfy?
4.  What is the significance of poles lying outside the unit circle in the \(z\)-plane for a causal system?

## Supports

- [[skills/mathematics/complex-frequency-domain-analysis/microskills/z-transform-pole-calculation|Z-transform Pole Calculation]]
