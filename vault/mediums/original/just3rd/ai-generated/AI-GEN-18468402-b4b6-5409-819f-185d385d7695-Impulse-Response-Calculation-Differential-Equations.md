---
type: "medium"
title: "Impulse Response Calculation from Differential Equations"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/signals-systems/lti-system-analysis/microskills/impulse-response-calculation-differential-equations|impulse-response-calculation-differential-equations]]"
learning-time-in-minutes: 4
---
# Impulse Response Calculation from Differential Equations

In LTI (Linear Time-Invariant) system analysis, understanding how a system reacts to an impulse input is fundamental. This reaction is called the **impulse response**, denoted by $h(t)$ for continuous-time systems and $h[n]$ for discrete-time systems. When an LTI system is described by a differential equation, we can calculate its impulse response by specifically setting the input to the Dirac delta function.

## The Dirac Delta Function

The Dirac delta function, $\delta(t)$, is a generalized function that is zero everywhere except at $t=0$, where it is infinitely large. However, its integral over all time is 1:
$$
\int_{-\infty}^{\infty} \delta(t) dt = 1
$$
For practical purposes, think of it as a "pulse" of infinitely short duration and unit area.

## Calculating the Impulse Response

When a system's behavior is defined by a linear, constant-coefficient differential equation, we can find its impulse response by:

1.  **Replacing the input signal with $\delta(t)$**.
2.  **Assuming zero initial conditions**. This is crucial because the impulse response represents the system's *natural* response to an impulse, free from any prior energy storage.
3.  **Solving the resulting differential equation for the output $y(t)$**. The solution $y(t)$ will be the impulse response $h(t)$.

Let's consider a common second-order system described by the differential equation:
$$
a \frac{d^2y(t)}{dt^2} + b \frac{dy(t)}{dt} + cy(t) = x(t)
$$
where $y(t)$ is the output, $x(t)$ is the input, and $a, b, c$ are constants.

To find the impulse response $h(t)$, we set $x(t) = \delta(t)$ and assume $y(0^-) = 0$ and $\frac{dy(0^-)}{dt} = 0$ (where $0^-$ denotes the time just before $t=0$). The equation becomes:
$$
a \frac{d^2h(t)}{dt^2} + b \frac{dh(t)}{dt} + ch(t) = \delta(t)
$$

### Solving the Differential Equation

Solving this equation involves a few steps, particularly dealing with the $\delta(t)$ term and the derivatives at $t=0$.

#### Step 1: Understand the Behavior Around $t=0$

The Dirac delta function $\delta(t)$ has the property that $\int_0^-^0^+ \delta(\tau) d\tau = 1$. Integrating the entire differential equation from $0^-$ to $0^+$:
$$
\int_{0^-}^{0^+} \left( a \frac{d^2h(t)}{dt^2} + b \frac{dh(t)}{dt} + ch(t) \right) dt = \int_{0^-}^{0^+} \delta(t) dt
$$
$$
a \int_{0^-}^{0^+} \frac{d^2h(t)}{dt^2} dt + b \int_{0^-}^{0^+} \frac{dh(t)}{dt} dt + c \int_{0^-}^{0^+} h(t) dt = 1
$$

Since $h(t)$ and its first derivative are assumed to be zero just before $t=0$ (due to zero initial conditions), and the term $ch(t)$ will be continuous and zero at $t=0$, the integrals become:
$$
a \left( \frac{dh(0^+)}{dt} - \frac{dh(0^-)}{dt} \right) + b (h(0^+) - h(0^-)) + c \cdot 0 = 1
$$
Assuming $h(0^-)=0$ and $\frac{dh(0^-)}{dt}=0$:
$$
a \frac{dh(0^+)}{dt} + b h(0^+) = 1
$$

This equation gives us conditions for the derivative of $h(t)$ at $t=0^+$. If $a \neq 0$, we typically observe a "jump" in the derivative at $t=0$. If $a=0$, the system is first-order.

#### Step 2: Solve for $t > 0$

For $t > 0$, $\delta(t) = 0$. The differential equation simplifies to the homogeneous form:
$$
a \frac{d^2h(t)}{dt^2} + b \frac{dh(t)}{dt} + ch(t) = 0
$$
This is a standard second-order linear homogeneous differential equation with constant coefficients. The solution will be of the form $h(t) = A_1 e^{r_1t} + A_2 e^{r_2t}$ (or involve sines/cosines if roots are complex, or repeated roots). The roots $r_1, r_2$ are found from the characteristic equation:
$$
ar^2 + br + c = 0
$$

#### Step 3: Use Initial Conditions to Find Coefficients

The coefficients $A_1$ and $A_2$ are determined using the conditions derived in Step 1. We know $h(0^+)$ and $\frac{dh(0^+)}{dt}$. The value of $h(0^+)$ is generally found by considering the continuity of the output for $t \ge 0$ when the input has a specific behavior at $t=0$. In many cases, if the system is causal and has no direct feedthrough of the input to the output, $h(0^+) = 0$.

### Worked Example

Consider the system described by:
$$
\frac{dy(t)}{dt} + 2y(t) = x(t)
$$
We want to find the impulse response $h(t)$.

1.  **Set input to $\delta(t)$ and assume zero initial conditions:**
    $$
    \frac{dh(t)}{dt} + 2h(t) = \delta(t)
    $$
    Assume $h(0^-) = 0$.

2.  **Integrate from $0^-$ to $0^+$:**
    $$
    \int_{0^-}^{0^+} \frac{dh(t)}{dt} dt + 2 \int_{0^-}^{0^+} h(t) dt = \int_{0^-}^{0^+} \delta(t) dt
    $$
    $$
    (h(0^+) - h(0^-)) + 2 \cdot 0 = 1
    $$
    Since $h(0^-) = 0$, we get $h(0^+) = 1$.

3.  **Solve for $t > 0$:**
    For $t > 0$, $\delta(t) = 0$. The equation is:
    $$
    \frac{dh(t)}{dt} + 2h(t) = 0
    $$
    The characteristic equation is $r + 2 = 0$, so $r = -2$.
    The general solution is $h(t) = A e^{-2t}$ for $t > 0$.

4.  **Apply initial condition $h(0^+) = 1$:**
    $1 = A e^{-2 \cdot 0}$
    $1 = A$

Therefore, the impulse response is:
$$
h(t) = e^{-2t} u(t)
$$
where $u(t)$ is the unit step function, ensuring the response is zero for $t < 0$ (causality).

This process allows you to transform a system's differential equation description into its fundamental impulse response, a key step in understanding its behavior and analyzing its output for any given input.

## Supports

- [[skills/mathematics/signals-systems/lti-system-analysis/microskills/impulse-response-calculation-differential-equations|Impulse Response Calculation (Differential Equations)]]
