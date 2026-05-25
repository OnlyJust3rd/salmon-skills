---
type: "medium"
title: "Pole-Zero Plot Interpretation for Stability"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/signals-systems/system-property-analysis/microskills/pole-zero-plot-interpretation-for-stability|pole-zero-plot-interpretation-for-stability]]"
learning-time-in-minutes: 4
---
# Pole-Zero Plot Interpretation for Stability

Understanding the stability of a continuous-time system is crucial. One powerful graphical tool for this analysis is the pole-zero plot. This lesson focuses on how to geometrically interpret these plots to determine system stability.

## What is a Pole-Zero Plot?

A pole-zero plot is a graphical representation of the roots of a system's characteristic equation.
*   **Poles:** These are the values of 's' (in the Laplace domain) that make the denominator of the system's transfer function equal to zero. They are typically represented by 'x' on the plot.
*   **Zeros:** These are the values of 's' that make the numerator of the system's transfer function equal to zero. They are typically represented by 'o' on the plot.

The plot is drawn on the complex s-plane, which has a real axis (horizontal) and an imaginary axis (vertical).

## The s-Plane and Stability

The location of the poles in the s-plane directly dictates the stability of a continuous-time linear time-invariant (LTI) system.

### The Crucial Region: The Left-Half Plane (LHP)

*   **Definition:** The Left-Half Plane (LHP) is the region of the s-plane where the real part of 's' is negative ($Re(s) < 0$).
*   **Significance:** For a continuous-time system to be stable, *all* of its poles must lie in the LHP.

### The Boundary: The Imaginary Axis

*   **Definition:** The imaginary axis is the line in the s-plane where the real part of 's' is zero ($Re(s) = 0$).
*   **Significance:** If poles lie on the imaginary axis, the system is considered marginally stable. This means the system's response will oscillate indefinitely without decaying or growing. However, in many practical engineering contexts, marginal stability is often treated as a form of instability because sustained oscillations can be undesirable.

### The Unstable Region: The Right-Half Plane (RHP)

*   **Definition:** The Right-Half Plane (RHP) is the region of the s-plane where the real part of 's' is positive ($Re(s) > 0$).
*   **Significance:** If even a single pole of the system lies in the RHP, the system is unstable. Its output will grow without bound, leading to system failure.

## Geometric Interpretation for Stability

Now, let's translate these definitions into a practical geometric interpretation using the pole-zero plot.

1.  **Locate all Poles:** Identify all the 'x' markers on your pole-zero plot.
2.  **Check the Real Part:** For each pole, determine if its real part is negative, zero, or positive.
    *   **All Poles in LHP ($Re(s) < 0$):** The system is **stable**.
    *   **Any Pole in RHP ($Re(s) > 0$):** The system is **unstable**.
    *   **Poles on Imaginary Axis ($Re(s) = 0$):** The system is **marginally stable** (often considered unstable in practice).
3.  **Zeros are Secondary for Stability:** Notice that the location of zeros ('o') does *not* directly affect the stability of the system. Stability is determined solely by the location of the poles. Zeros, however, do influence the transient response and the amplitude of the system's output.

## Worked Example

Consider a system with the following poles:
*   Pole 1 at $s = -2 + 3j$
*   Pole 2 at $s = -2 - 3j$
*   Pole 3 at $s = -5$

**Analysis:**
*   Pole 1: Real part is -2. This is less than 0. It's in the LHP.
*   Pole 2: Real part is -2. This is less than 0. It's in the LHP.
*   Pole 3: Real part is -5. This is less than 0. It's in the LHP.

**Conclusion:** Since all poles are in the Left-Half Plane, this system is **stable**.

Now, consider a system with poles:
*   Pole 1 at $s = -1 + 2j$
*   Pole 2 at $s = -1 - 2j$
*   Pole 3 at $s = +3$

**Analysis:**
*   Pole 1: Real part is -1. LHP.
*   Pole 2: Real part is -1. LHP.
*   Pole 3: Real part is +3. This is greater than 0. It's in the RHP.

**Conclusion:** Because Pole 3 is in the Right-Half Plane, this system is **unstable**.

## Key Takeaways

*   **Poles determine stability.** Zeros do not.
*   **All poles must be in the Left-Half Plane (LHP)** for a continuous-time system to be stable.
*   **Any pole in the Right-Half Plane (RHP)** makes the system unstable.
*   **Poles on the imaginary axis** indicate marginal stability.

## Supports

- [[skills/mathematics/signals-systems/system-property-analysis/microskills/pole-zero-plot-interpretation-for-stability|Pole-Zero Plot Interpretation for Stability]]
