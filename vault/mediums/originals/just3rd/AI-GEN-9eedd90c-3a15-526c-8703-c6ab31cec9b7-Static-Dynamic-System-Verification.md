---
type: "medium"
title: "Static vs. Dynamic System Verification"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/signals-systems/system-property-analysis/microskills/static-dynamic-system-verification|static-dynamic-system-verification]]"
related-skills:
  - "[[skills/mathematics/signals-systems/system-property-analysis/system-property-analysis|system-property-analysis]]"
learning-time-in-minutes: 6
---
# Static vs. Dynamic System Verification

Understanding whether a system is static or dynamic is a fundamental step in system property analysis. This knowledge helps us predict how a system will behave under different conditions and informs how we design tests and analyze its performance.

## What is a Static System?

A static system is one whose output depends *only* on the current input. In other words, the system has no memory of past inputs or states. If you apply the same input to a static system at different times, you will always get the same output.

**Key Characteristic:** The system's output at any given time $t$, denoted as $y(t)$, is solely a function of the input at that same time $t$, denoted as $x(t)$. Mathematically, this can be represented as:

$$ y(t) = f(x(t)) $$

Here, $f$ represents the function describing the system's transformation, and crucially, it does not involve any past values of $x$ or $y$.

## What is a Dynamic System?

A dynamic system, conversely, has an output that depends not only on the current input but also on past inputs, past outputs, or its internal state. These systems possess "memory."

**Key Characteristic:** The system's output at any given time $t$, $y(t)$, is a function of the current input $x(t)$ and/or past inputs $x(\tau)$ where $\tau < t$, and/or past outputs $y(\tau)$ where $\tau < t$. Mathematically, this is represented as:

$$ y(t) = f(x(t), x(t-1), ..., y(t-1), y(t-2), ...) $$

Or, more generally in terms of system state:

$$ y(t) = f(x(t), \text{state}(t-1)) $$

The presence of $x(t-k)$, $y(t-k)$ (where $k > 0$), or a persistent "state" signifies a dynamic system.

## How to Verify Static/Dynamic Behavior

The primary method to verify if a system is static or dynamic is to apply a **time-shift test**.

**The Time-Shift Test:**

1.  **Record the system's response** to a specific input signal.
2.  **Time-shift the *exact same* input signal** by some amount, let's say $\Delta t$.
3.  **Apply the time-shifted input signal** to the system.
4.  **Compare the output of the original system response with the output of the time-shifted system response.**

**Verification Rules:**

*   **If the output of the time-shifted system is identical to the original output, but shifted by $\Delta t$**, then the system is **time-invariant** (a property of dynamic systems, but the test itself can reveal dynamism).
*   **More directly for static/dynamic:** If applying the same input at two different times results in different outputs, the system is dynamic. If the system's response depends on the *history* of inputs or its internal state, it's dynamic.

Let's refine this for static/dynamic directly:

**The Static/Dynamic Verification Test:**

1.  **Apply an input signal $x(t)$** to the system and observe the output $y(t)$.
2.  **Later, at a different time $t_0$, apply the *exact same* input signal $x(t)$** (meaning, the same sequence of values relative to $t_0$). Let the new output be $y_{new}(t)$.
3.  **Compare $y(t)$ and $y_{new}(t)$.**

**Verification Rules:**

*   **If $y(t) = y_{new}(t)$ for all $t$**, the system is **static**. The output depends only on the instantaneous input, not on when it's applied.
*   **If $y(t) \neq y_{new}(t)$ for any $t$**, the system is **dynamic**. The system's behavior changes over time, or it remembers past inputs/states.

### Worked Example

Consider a simple system defined by the equation:

$$ y(t) = 2x(t) + 1 $$

Let's apply the static/dynamic verification test.

**Step 1: Apply input $x(t) = 3$ at time $t=1$.**

The input is a constant value of 3.
The output at $t=1$ will be:
$$ y(1) = 2x(1) + 1 = 2(3) + 1 = 7 $$
So, the output signal is $y(t) = 7$ for all $t$ when $x(t)=3$.

**Step 2: Later, at time $t=5$, apply the *exact same* input signal $x(t) = 3$.**

The input is still a constant value of 3.
The output at $t=5$ will be:
$$ y_{new}(5) = 2x(5) + 1 = 2(3) + 1 = 7 $$
The output signal observed when applying the input at $t=5$ will also be $y_{new}(t) = 7$ for all $t$ where the input is 3.

**Step 3: Compare $y(t)$ and $y_{new}(t)$.**

In this case, $y(t) = 7$ and $y_{new}(t) = 7$. They are identical.

**Conclusion:** Since the output is the same regardless of when the input $x(t)=3$ is applied, this system is **static**.

---

Now consider a system with a simple memory:

$$ y(t) = x(t) + x(t-1) $$

**Step 1: Apply input $x(t) = 2$ for $t \ge 0$ (assume $x(t)=0$ for $t<0$).**

Let's observe the output at $t=1$ and $t=2$.
At $t=1$:
$$ y(1) = x(1) + x(1-1) = x(1) + x(0) = 2 + 2 = 4 $$
At $t=2$:
$$ y(2) = x(2) + x(2-1) = x(2) + x(1) = 2 + 2 = 4 $$

**Step 2: Later, at time $t=10$, apply the *exact same* input signal $x(t) = 2$ for $t \ge 10$ (assume $x(t)=0$ for $t<10$).**

Let's observe the output at $t=11$ and $t=12$.
At $t=11$:
$$ y_{new}(11) = x(11) + x(11-1) = x(11) + x(10) = 2 + 2 = 4 $$
At $t=12$:
$$ y_{new}(12) = x(12) + x(12-1) = x(12) + x(11) = 2 + 2 = 4 $$

This specific input might be misleading as the output values are the same. We need a more robust test. Let's try a step input.

**Revised Step 1: Apply input $x(t) = 0$ for $t < 1$ and $x(t) = 1$ for $t \ge 1$.**

At $t=0$: $y(0) = x(0) + x(-1) = 0 + 0 = 0$.
At $t=1$: $y(1) = x(1) + x(0) = 1 + 0 = 1$.
At $t=2$: $y(2) = x(2) + x(1) = 1 + 1 = 2$.
At $t=3$: $y(3) = x(3) + x(2) = 1 + 1 = 2$.
The output sequence is $0, 1, 2, 2, 2, ...$

**Revised Step 2: Later, at time $t=10$, apply the *exact same* input signal: $x_{new}(t) = 0$ for $t < 10$ and $x_{new}(t) = 1$ for $t \ge 10$.**

At $t=10$: $y_{new}(10) = x_{new}(10) + x_{new}(9) = 1 + 0 = 1$.
At $t=11$: $y_{new}(11) = x_{new}(11) + x_{new}(10) = 1 + 1 = 2$.
At $t=12$: $y_{new}(12) = x_{new}(12) + x_{new}(11) = 1 + 1 = 2$.
The output sequence for this later application is $0, 0, ..., 0, 1, 2, 2, 2, ...$ (starting from $t=10$).

**Step 3: Compare $y(t)$ and $y_{new}(t)$.**

We can see that $y(1)=1$ but $y_{new}(11)=2$. The outputs are different even though the *pattern* of the input was the same (a step from 0 to 1). This difference arises because the system's output at any time depends on previous inputs ($x(t-1)$).

**Conclusion:** Since the output is not the same when the same input pattern is applied at different times, this system is **dynamic**.

## Common Pitfalls

*   **Confusing Time-Invariance with Static/Dynamic:** While related, they are distinct. A static system is always time-invariant. However, a dynamic system can be time-invariant or time-varying. The time-shift test described earlier is for time-invariance. The test to determine static/dynamic behavior is about applying the *same input function* at different absolute times and comparing the resulting outputs.
*   **Insufficient Input Signal:** Using a constant input for both static and dynamic systems might not reveal the difference. Use signals that change over time, like step inputs, ramps, or impulses, to better expose memory effects.
*   **Ignoring Initial Conditions:** For dynamic systems, initial conditions can significantly affect the output. Ensure your test setup or analysis accounts for these.

By applying these verification methods, you can confidently classify a system as static or dynamic, which is a crucial first step in understanding its overall behavior.

## Supports

- [[skills/mathematics/signals-systems/system-property-analysis/microskills/static-dynamic-system-verification|Static/Dynamic System Verification]]
