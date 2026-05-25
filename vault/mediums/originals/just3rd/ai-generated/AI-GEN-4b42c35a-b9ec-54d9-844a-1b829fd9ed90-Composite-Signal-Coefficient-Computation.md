---
type: "medium"
title: "Applying Linearity for Composite Signal Coefficients"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/signals-systems/system-property-analysis/microskills/composite-signal-coefficient-computation|composite-signal-coefficient-computation]]"
related-skills:
  - "[[skills/mathematics/signals-systems/system-property-analysis/system-property-analysis|system-property-analysis]]"
learning-time-in-minutes: 4
---
# Applying Linearity for Composite Signal Coefficients

This lesson focuses on using the linearity property to efficiently compute Fourier Series (FS) and Discrete-Time Fourier Series (DTFS) coefficients for signals that are combinations of simpler signals. This is a practical application of System Property Analysis, directly helping us **Apply linearity property** to simplify calculations.

## Understanding Linearity

A system (or an operation, like computing Fourier Series coefficients) is considered linear if it satisfies two properties:

1.  **Additivity:** If you have two inputs, $x_1(t)$ and $x_2(t)$, and their outputs are $y_1(t)$ and $y_2(t)$ respectively, then the output of the sum of the inputs, $x_1(t) + x_2(t)$, is the sum of their individual outputs, $y_1(t) + y_2(t)$.
2.  **Homogeneity (or Scaling):** If you scale an input $x(t)$ by a constant $a$, so you have $a \cdot x(t)$, then the output is also scaled by the same constant, $a \cdot y(t)$.

When we talk about computing Fourier Series or Discrete-Time Fourier Series coefficients, we are essentially applying an operation to a signal. This operation is linear.

## The Linearity Property in Action for FS/DTFS Coefficients

Let's say we want to find the FS (or DTFS) coefficients for a signal $x(t)$ that is a sum of two other signals, $x_1(t)$ and $x_2(t)$:

$$
x(t) = a \cdot x_1(t) + b \cdot x_2(t)
$$

where $a$ and $b$ are constants.

The linearity property tells us that the Fourier Series (or DTFS) coefficients of $x(t)$, denoted as $c_k$ (or $d_k$ for DTFS), can be found by taking a linear combination of the coefficients of $x_1(t)$ and $x_2(t)$.

Let $c_{1,k}$ be the $k$-th FS coefficient of $x_1(t)$, and $c_{2,k}$ be the $k$-th FS coefficient of $x_2(t)$. Then, the $k$-th FS coefficient of $x(t)$ is:

$$
c_k = a \cdot c_{1,k} + b \cdot c_{2,k}
$$

The same applies to DTFS coefficients, using $d_k$ for the coefficients of $x(t)$, $d_{1,k}$ for $x_1(t)$, and $d_{2,k}$ for $x_2(t)$:

$$
d_k = a \cdot d_{1,k} + b \cdot d_{2,k}
$$

This property is incredibly powerful because it means we don't need to recompute the entire Fourier Series integral for the composite signal from scratch. Instead, we can compute the coefficients for the simpler component signals and then combine them.

## When to Use This Property

You should use the linearity property whenever the signal you need to analyze is a sum of scaled, simpler signals for which you can either:

*   Easily compute the FS/DTFS coefficients.
*   Already know the FS/DTFS coefficients.

This often occurs with signals that are combinations of sinusoids, square waves, or other basic periodic functions.

## Worked Example: Composite Signal Coefficients (FS)

Let's find the FS coefficients for the signal $x(t)$ which is composed of a cosine wave and a sine wave:

$$
x(t) = 3 \cos(2\pi t) + 2 \sin(4\pi t)
$$

We assume these signals are periodic with their fundamental frequencies.

**Step 1: Identify the component signals.**
Our signal $x(t)$ is composed of:
*   $x_1(t) = 3 \cos(2\pi t)$
*   $x_2(t) = 2 \sin(4\pi t)$

**Step 2: Determine the FS coefficients for each component signal.**

For $x_1(t) = 3 \cos(2\pi t)$:
This is a cosine wave with amplitude 3 and fundamental frequency $f_0 = 1$ Hz. We know that the Fourier Series for a cosine wave is:
$$
\cos(\omega_0 t) = \frac{1}{2} e^{j\omega_0 t} + \frac{1}{2} e^{-j\omega_0 t}
$$
So, $x_1(t) = 3 \left( \frac{1}{2} e^{j2\pi t} + \frac{1}{2} e^{-j2\pi t} \right) = \frac{3}{2} e^{j2\pi t} + \frac{3}{2} e^{-j2\pi t}$.
The non-zero FS coefficients for $x_1(t)$ are:
*   $c_{1,1} = \frac{3}{2}$ (for $k=1$)
*   $c_{1,-1} = \frac{3}{2}$ (for $k=-1$)

For $x_2(t) = 2 \sin(4\pi t)$:
This is a sine wave with amplitude 2 and frequency $2$ Hz. The fundamental frequency of the composite signal needs to be determined later, but for computing coefficients of individual components, we use their given frequencies.
We know that:
$$
\sin(\omega_0 t) = \frac{1}{2j} e^{j\omega_0 t} - \frac{1}{2j} e^{-j\omega_0 t}
$$
So, $x_2(t) = 2 \left( \frac{1}{2j} e^{j4\pi t} - \frac{1}{2j} e^{-j4\pi t} \right) = \frac{1}{j} e^{j4\pi t} - \frac{1}{j} e^{-j4\pi t}$.
The non-zero FS coefficients for $x_2(t)$ are:
*   $c_{2,2} = \frac{1}{j} = -j$ (for $k=2$)
*   $c_{2,-2} = -\frac{1}{j} = j$ (for $k=-2$)

**Step 3: Apply the linearity property to find the coefficients of $x(t)$.**
Our signal is $x(t) = 1 \cdot x_1(t) + 1 \cdot x_2(t)$. So, $a=1$ and $b=1$.

The FS coefficients $c_k$ for $x(t)$ are:
$$
c_k = 1 \cdot c_{1,k} + 1 \cdot c_{2,k}
$$

Let's find the non-zero coefficients:

*   For $k=1$: $c_1 = c_{1,1} + c_{2,1} = \frac{3}{2} + 0 = \frac{3}{2}$
*   For $k=-1$: $c_{-1} = c_{1,-1} + c_{2,-1} = \frac{3}{2} + 0 = \frac{3}{2}$
*   For $k=2$: $c_2 = c_{1,2} + c_{2,2} = 0 + (-j) = -j$
*   For $k=-2$: $c_{-2} = c_{1,-2} + c_{2,-2} = 0 + j = j$
*   For all other integer values of $k$, $c_k = 0$.

Therefore, the FS coefficients for $x(t) = 3 \cos(2\pi t) + 2 \sin(4\pi t)$ are $c_1 = \frac{3}{2}$, $c_{-1} = \frac{3}{2}$, $c_2 = -j$, and $c_{-2} = j$.

## Key Takeaway

The linearity property allows us to decompose a complex composite signal into simpler parts, compute the Fourier Series or Discrete-Time Fourier Series coefficients for each part separately, and then combine these coefficients to get the coefficients for the original composite signal. This significantly reduces the computational effort required.

## Supports

- [[skills/mathematics/signals-systems/system-property-analysis/microskills/composite-signal-coefficient-computation|Composite Signal Coefficient Computation]]
