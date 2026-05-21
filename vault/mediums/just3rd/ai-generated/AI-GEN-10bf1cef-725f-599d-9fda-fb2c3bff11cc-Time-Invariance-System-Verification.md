---
type: "medium"
title: "Verifying Time-Invariance in Systems"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/system-property-analysis/microskills/time-invariance-system-verification|time-invariance-system-verification]]"
---
# Verifying Time-Invariance in Systems

This lesson focuses on a specific aspect of system property analysis: verifying whether a system is **time-invariant**. We'll apply mathematical tests to confirm this characteristic.

## What is Time-Invariance?

A system is considered **time-invariant** if its behavior does not change over time. In simpler terms, if you apply the same input to a time-invariant system at different times, you should get the same output, just shifted in time according to when the input was applied.

Mathematically, a system $S$ is time-invariant if for any input signal $x(t)$ and any time shift $\tau$:

$$ S[x(t - \tau)] = y(t - \tau) $$

where $y(t) = S[x(t)]$ is the output of the system when the input is $x(t)$.

## The Time-Shift Test

The most common way to mathematically verify time-invariance is by applying the **time-shift test**. This involves comparing two scenarios:

1.  **Scenario 1:** Apply an input $x(t)$ to the system and obtain the output $y(t)$.
2.  **Scenario 2:** First, shift the input signal by $\tau$ to get $x(t - \tau)$. Then, apply this shifted input to the system and obtain the output. Let's call this output $z(t)$.
3.  **Comparison:** If the output from Scenario 2, $z(t)$, is simply the output from Scenario 1 shifted by the same $\tau$ (i.e., $z(t) = y(t - \tau)$), then the system is time-invariant. If $z(t) \neq y(t - \tau)$, the system is time-variant.

## Applying the Time-Shift Test: Worked Example

Let's consider a system defined by the input-output relationship:

$$ y(t) = S[x(t)] = a \cdot x(t) $$

where 'a' is a constant.

**Step 1: Define the system and an arbitrary input.**

Our system is a simple scaling operation: $y(t) = a \cdot x(t)$.
Let's take an arbitrary input signal $x(t)$.

**Step 2: Calculate the output for the original input $x(t)$.**

As per the system definition, the output is:
$$ y(t) = a \cdot x(t) $$

**Step 3: Create a time-shifted input.**

Let's shift the input signal $x(t)$ by a time $\tau$. The shifted input is $x(t - \tau)$.

**Step 4: Apply the system to the time-shifted input.**

Now, we apply our system $S$ to the shifted input $x(t - \tau)$:
$$ z(t) = S[x(t - \tau)] $$
Since the system scales its input by 'a', we have:
$$ z(t) = a \cdot x(t - \tau) $$

**Step 5: Compare the result with the time-shifted original output.**

We need to compare $z(t)$ with $y(t - \tau)$.
From Step 2, we know $y(t) = a \cdot x(t)$.
So, to find $y(t - \tau)$, we replace 't' with 't - $\tau$' in the expression for $y(t)$:
$$ y(t - \tau) = a \cdot x(t - \tau) $$

Now, let's compare $z(t)$ and $y(t - \tau)$:
$$ z(t) = a \cdot x(t - \tau) $$
$$ y(t - \tau) = a \cdot x(t - \tau) $$

Since $z(t) = y(t - \tau)$, the system $y(t) = a \cdot x(t)$ is **time-invariant**.

## Another Example: A Time-Variant System

Let's examine a different system:

$$ y(t) = S[x(t)] = t \cdot x(t) $$

**Step 1: Define the system and an arbitrary input.**

System: $y(t) = t \cdot x(t)$.
Arbitrary input: $x(t)$.

**Step 2: Calculate the output for the original input $x(t)$.**

$$ y(t) = t \cdot x(t) $$

**Step 3: Create a time-shifted input.**

Shifted input: $x(t - \tau)$.

**Step 4: Apply the system to the time-shifted input.**

$$ z(t) = S[x(t - \tau)] $$
Using the system definition:
$$ z(t) = t \cdot x(t - \tau) $$

**Step 5: Compare the result with the time-shifted original output.**

We need to compare $z(t)$ with $y(t - \tau)$.
From Step 2, $y(t) = t \cdot x(t)$.
Substitute 't' with 't - $\tau$' to find $y(t - \tau)$:
$$ y(t - \tau) = (t - \tau) \cdot x(t - \tau) $$

Now, compare $z(t)$ and $y(t - \tau)$:
$$ z(t) = t \cdot x(t - \tau) $$
$$ y(t - \tau) = (t - \tau) \cdot x(t - \tau) $$

Clearly, $z(t) \neq y(t - \tau)$ (unless $\tau = 0$, which is trivial, or $x(t-\tau)=0$). The output depends on the absolute time 't' multiplying the input, not just the time relative to the input's arrival. Therefore, the system $y(t) = t \cdot x(t)$ is **time-variant**.

## Key Takeaways for Time-Invariance Verification

*   **The Goal:** To determine if the system's characteristics remain constant regardless of when the input is applied.
*   **The Method:** The time-shift test is your primary tool.
*   **The Comparison:** Always compare the system's output from a *shifted input* with the *time-shifted version of the original output*.
*   **Common Pitfalls:**
    *   Forgetting to shift the *output* in the comparison step.
    *   Assuming a system is time-invariant based on intuition without performing the mathematical test.
    *   Mistakes in algebraic manipulation when calculating shifted terms.

By systematically applying the time-shift test, you can rigorously determine if a system exhibits the property of time-invariance, a crucial step in understanding its overall behavior.

## Supports

- [[skills/mathematics/system-property-analysis/microskills/time-invariance-system-verification|Time-Invariance System Verification]]
