---
type: "medium"
title: "Causality Analysis Using Pole-Zero Plots"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/complex-frequency-domain-analysis/microskills/causality-analysis-pole-zero-plot|causality-analysis-pole-zero-plot]]"
---
# Causality Analysis Using Pole-Zero Plots

Understanding system causality is crucial for analyzing system behavior. A causal system's output depends only on present and past inputs, not future ones. For continuous-time Linear Time-Invariant (LTI) systems, this property is directly linked to the location of poles in their transfer function's pole-zero plot.

## What is Causality?

In the context of signal processing and control systems, a system is considered **causal** if its output at any given time \(t\) depends only on the input at time \(t\) and all preceding times (\(t' \le t\)). If the output also depends on future inputs (\(t' > t\)), the system is **non-causal**.

For LTI systems described by a rational transfer function \(H(s)\), causality is determined by the region of convergence (ROC) of its impulse response \(h(t)\). Specifically, for continuous-time systems, causality implies that the ROC of \(H(s)\) must include the imaginary axis (\(Re\{\omega\} \ge 0\)).

## Connecting Pole Locations to Causality

The location of poles in the \(s\)-plane (the complex plane for continuous-time systems) provides a direct visual cue for causality when considering the ROC.

*   **Causal Systems:** For a causal LTI system, the ROC of its Laplace transform \(H(s)\) *must* include the imaginary axis. This means the ROC is of the form \(Re\{s\} > \sigma_0\) for some \(\sigma_0\). If the ROC extends to infinity to the right of the imaginary axis, the system is causal. This condition is met if and only if all the poles of \(H(s)\) lie in the open left-half of the \(s\)-plane (\(Re\{s\} < 0\)). If poles lie on the imaginary axis, causality might be affected if the ROC is not properly defined.

*   **Non-Causal Systems:** If a system has at least one pole in the open right-half of the \(s\)-plane (\(Re\{s\} > 0\)), it *cannot* be causal. For such systems, the ROC will not include the imaginary axis.

**Key Takeaway:** For an LTI system, if all poles are in the left-half plane, the system is causal, provided the ROC is to the right of the rightmost pole. If any pole is in the right-half plane, the system is non-causal.

## Practical Example: Pole-Zero Plots

Let's analyze two systems using their pole-zero plots to determine causality.

**System 1:**
Transfer Function: \(H_1(s) = \frac{s+1}{(s+2)(s+3)}\)

Pole-Zero Plot:
*   Zero at \(s = -1\)
*   Poles at \(s = -2\) and \(s = -3\)

Analysis: Both poles (-2 and -3) are located in the left-half of the \(s\)-plane. The ROC for a causal system with these poles would be \(Re\{s\} > -2\), which includes the imaginary axis. Therefore, System 1 is **causal**.

**System 2:**
Transfer Function: \(H_2(s) = \frac{s+1}{(s-2)(s+3)}\)

Pole-Zero Plot:
*   Zero at \(s = -1\)
*   Poles at \(s = 2\) and \(s = -3\)

Analysis: One pole (at \(s=2\)) is located in the right-half of the \(s\)-plane. A system with a pole in the right-half plane is inherently non-causal, as the ROC cannot include the imaginary axis. Therefore, System 2 is **non-causal**.

## Practice Task

Consider the following transfer functions. Sketch their pole-zero plots and determine if the corresponding LTI systems are causal.

1.  \(H(s) = \frac{s-1}{(s+1)(s+4)}\)
2.  \(H(s) = \frac{1}{s-5}\)
3.  \(H(s) = \frac{s+2}{s^2+4}\)

## Self-Check Questions

1.  What is the fundamental condition for a system to be causal?
2.  Where must all poles of a causal LTI system's transfer function lie in the \(s\)-plane?
3.  If a pole-zero plot shows poles only in the left-half plane, can you definitively say the system is causal? Explain your reasoning related to the ROC.
4.  What does it mean if a system has a pole in the right-half of the \(s\)-plane regarding its causality?

## Supports

- [[skills/mathematics/complex-frequency-domain-analysis/microskills/causality-analysis-pole-zero-plot|Causality Analysis (Pole-Zero Plot)]]
