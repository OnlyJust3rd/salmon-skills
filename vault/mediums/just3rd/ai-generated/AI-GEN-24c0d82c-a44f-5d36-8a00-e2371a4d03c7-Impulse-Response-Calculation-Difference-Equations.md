---
type: "medium"
title: "Calculating the Impulse Response from Difference Equations"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/lti-system-analysis/microskills/impulse-response-calculation-difference-equations|impulse-response-calculation-difference-equations]]"
---
# Calculating the Impulse Response from Difference Equations

When analyzing Linear Time-Invariant (LTI) systems, understanding their behavior is crucial. One fundamental way to characterize an LTI system is by its impulse response, which tells us how the system reacts to a unit impulse input, denoted as $\delta[n]$. This lesson focuses on a practical method for finding this impulse response when the system is described by a difference equation.

## What is a Difference Equation?

A difference equation is a mathematical equation that relates different values of a sequence. In the context of LTI systems, it typically describes the output $y[n]$ as a function of past and present input values $x[n]$ and past output values $y[n]$. A general form of a linear constant-coefficient difference equation is:

$$
a_0 y[n] + a_1 y[n-1] + \dots + a_N y[n-N] = b_0 x[n] + b_1 x[n-1] + \dots + b_M x[n-M]
$$

where $a_i$ and $b_i$ are constants, $N$ is the order of the system, and $y[n-k]$ and $x[n-k]$ represent previous values of the output and input, respectively.

## The Impulse Response: $h[n]$

The impulse response, $h[n]$, is the output of the LTI system when the input is a unit impulse, $\delta[n]$. For an LTI system described by a difference equation, the impulse response $h[n]$ will satisfy the same difference equation, but with $x[n]$ replaced by $\delta[n]$ and $y[n]$ replaced by $h[n]$:

$$
a_0 h[n] + a_1 h[n-1] + \dots + a_N h[n-N] = b_0 \delta[n] + b_1 \delta[n-1] + \dots + b_M \delta[n-M]
$$

Crucially, for a causal LTI system, the impulse response is zero for $n < 0$, i.e., $h[n] = 0$ for $n < 0$. This initial condition is vital for solving the difference equation.

## Calculating $h[n]$: A Step-by-Step Approach

We can compute the impulse response $h[n]$ by iteratively solving the difference equation starting from $n=0$, using the initial condition $h[n]=0$ for $n<0$.

### Steps:

1.  **Replace $y[n]$ with $h[n]$ and $x[n]$ with $\delta[n]$:** Write down the system's difference equation, substituting $h[n]$ for $y[n]$ and $\delta[n]$ for $x[n]$.
2.  **Establish Initial Conditions:** For a causal system, assume $h[n] = 0$ for all $n < 0$.
3.  **Solve for $h[n]$ for $n = 0, 1, 2, \dots$:**
    *   Start by evaluating the equation at $n=0$.
    *   Then, evaluate at $n=1$, using the previously computed value of $h[0]$.
    *   Continue this process for subsequent values of $n$.
4.  **Identify the Pattern (Optional but Recommended):** As you compute several terms, try to recognize a pattern that allows you to express $h[n]$ in a closed-form expression for $n \ge 0$.

### Worked Example:

Consider an LTI system described by the difference equation:

$$
y[n] - \frac{1}{2} y[n-1] = x[n]
$$

Let's find its impulse response $h[n]$.

**Step 1: Replace $y[n]$ with $h[n]$ and $x[n]$ with $\delta[n]$**

$$
h[n] - \frac{1}{2} h[n-1] = \delta[n]
$$

**Step 2: Establish Initial Conditions**

Assume $h[n] = 0$ for $n < 0$.

**Step 3: Solve for $h[n]$ for $n = 0, 1, 2, \dots$**

*   **For $n=0$:**
    $$
    h[0] - \frac{1}{2} h[-1] = \delta[0]
    $$
    Since $h[-1] = 0$ and $\delta[0] = 1$:
    $$
    h[0] - \frac{1}{2}(0) = 1 \implies h[0] = 1
    $$

*   **For $n=1$:**
    $$
    h[1] - \frac{1}{2} h[0] = \delta[1]
    $$
    Since $h[0] = 1$ and $\delta[1] = 0$:
    $$
    h[1] - \frac{1}{2}(1) = 0 \implies h[1] = \frac{1}{2}
    $$

*   **For $n=2$:**
    $$
    h[2] - \frac{1}{2} h[1] = \delta[2]
    $$
    Since $h[1] = \frac{1}{2}$ and $\delta[2] = 0$:
    $$
    h[2] - \frac{1}{2}\left(\frac{1}{2}\right) = 0 \implies h[2] = \frac{1}{4}
    $$

*   **For $n=3$:**
    $$
    h[3] - \frac{1}{2} h[2] = \delta[3]
    $$
    Since $h[2] = \frac{1}{4}$ and $\delta[3] = 0$:
    $$
    h[3] - \frac{1}{2}\left(\frac{1}{4}\right) = 0 \implies h[3] = \frac{1}{8}
    $$

**Step 4: Identify the Pattern**

The computed terms are $h[0]=1$, $h[1]=\frac{1}{2}$, $h[2]=\frac{1}{4}$, $h[3]=\frac{1}{8}$, and so on. This clearly follows a geometric progression.
Thus, for $n \ge 0$, the impulse response is:

$$
h[n] = \left(\frac{1}{2}\right)^n \quad \text{for } n \ge 0
$$

And $h[n] = 0$ for $n < 0$. We can express this more compactly as:

$$
h[n] = \left(\frac{1}{2}\right)^n u[n]
$$

where $u[n]$ is the unit step function.

## Common Pitfalls to Avoid:

*   **Incorrect Initial Conditions:** Forgetting that $h[n]=0$ for $n<0$ can lead to incorrect calculations.
*   **Algebraic Errors:** Simple arithmetic mistakes when solving for $h[n]$ at each step.
*   **Misinterpreting $\delta[n]$:** Remembering that $\delta[n]=1$ only at $n=0$ and $\delta[n]=0$ for all other integer values of $n$.

By systematically applying these steps and paying attention to initial conditions, you can confidently compute the impulse response of LTI systems described by difference equations. This skill is fundamental to understanding system stability, frequency response, and system design.

## Supports

- [[skills/mathematics/lti-system-analysis/microskills/impulse-response-calculation-difference-equations|Impulse Response Calculation (Difference Equations)]]
