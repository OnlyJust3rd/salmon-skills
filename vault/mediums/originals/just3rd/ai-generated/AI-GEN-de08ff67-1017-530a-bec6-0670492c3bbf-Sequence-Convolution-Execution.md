---
type: "medium"
title: "Computing Discrete-Time Convolution"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/signals-systems/lti-system-analysis/microskills/sequence-convolution-execution|sequence-convolution-execution]]"
learning-time-in-minutes: 5
---
# Computing Discrete-Time Convolution

This lesson will guide you through the practical steps of computing discrete-time convolution for a given pair of input sequences. This is a fundamental operation in LTI system analysis.

## What is Discrete-Time Convolution?

Discrete-time convolution is the mathematical operation that describes the output of a Linear Time-Invariant (LTI) system in response to an input signal. If you have an input signal, denoted as $x[n]$, and the impulse response of an LTI system, denoted as $h[n]$, the output signal $y[n]$ is obtained by convolving $x[n]$ with $h[n]$.

The formula for discrete-time convolution is:

$$
y[n] = x[n] * h[n] = \sum_{k=-\infty}^{\infty} x[k] h[n-k]
$$

This formula might look intimidating, but we can break it down into a systematic procedure.

## Steps for Computing Convolution

Let's break down the process of computing convolution into manageable steps. We'll use a worked example to illustrate each step.

**Example:**
Let $x[n]$ be the input sequence and $h[n]$ be the impulse response sequence:
$x[n] = \{1, 2, 3\}$ for $n = 0, 1, 2$ (and 0 otherwise)
$h[n] = \{1, -1\}$ for $n = 0, 1$ (and 0 otherwise)

### Step 1: Write Out the Sequences

Clearly define your input sequence $x[n]$ and impulse response $h[n]$, including their values and the indices where they are non-zero.

For our example:
$x[n]$:
$x[0] = 1$
$x[1] = 2$
$x[2] = 3$

$h[n]$:
$h[0] = 1$
$h[1] = -1$

### Step 2: Flip and Shift the Impulse Response

The convolution formula involves $h[n-k]$. This means we need to flip the $h[n]$ sequence and then shift it.
Let's define a flipped version of $h[n]$ as $h[-n]$.
$h[-n]$:
$h[0] = 1$ (occurs at n=0)
$h[-1] = -1$ (occurs at n=-1)

Now, we consider $h[n-k]$, which means we are shifting $h[-k]$ by $n$ samples. For different values of $n$, we will have different shifts of the flipped $h$.

### Step 3: Calculate the Sum of Products

For each possible output index $n$, we need to calculate the sum of the products of $x[k]$ and the shifted, flipped $h[n-k]$. The summation is over all values of $k$ where both $x[k]$ and $h[n-k]$ are non-zero.

$$
y[n] = \sum_{k} x[k] h[n-k]
$$

To do this systematically, we can:

1.  **Align the sequences:** Place $x[k]$ on a number line and $h[n-k]$ (which is flipped $h$ shifted by $n$) on the same number line.
2.  **Identify overlap:** Find the values of $k$ where both sequences have non-zero values simultaneously.
3.  **Multiply and Sum:** For each overlapping position, multiply the corresponding values of $x[k]$ and $h[n-k]$ and sum these products.

Let's apply this to our example. We need to determine the range of possible output indices $n$. The first non-zero value of $x[n]$ is at $n=0$. The first non-zero value of $h[n]$ is at $n=0$. The last non-zero value of $x[n]$ is at $n=2$. The last non-zero value of $h[n]$ is at $n=1$.

The first possible output index $n$ will be the sum of the first indices of $x$ and $h$: $0 + 0 = 0$.
The last possible output index $n$ will be the sum of the last indices of $x$ and $h$: $2 + 1 = 3$.
So, our output $y[n]$ will be non-zero for $n = 0, 1, 2, 3$.

Let's compute $y[n]$ for each of these indices:

**For $n=0$:**
We need to compute $\sum_{k} x[k] h[0-k]$.
$h[0-k]$ is $h[-k]$.
$h[0] = 1$ (when $k=0$)
$h[-1] = -1$ (when $k=1$)

$x[k]$ is non-zero for $k=0, 1, 2$.
$h[0-k]$ is non-zero for $k=0$ (where $h[0]$) and $k=1$ (where $h[-1]$).

The overlap occurs at $k=0$ and $k=1$.
$y[0] = x[0]h[0-0] + x[1]h[0-1]$
$y[0] = x[0]h[0] + x[1]h[-1]$
$y[0] = (1)(1) + (2)(-1)$
$y[0] = 1 - 2 = -1$

**For $n=1$:**
We need to compute $\sum_{k} x[k] h[1-k]$.
$h[1-k]$:
If $k=0$, $h[1] = -1$.
If $k=1$, $h[0] = 1$.

$x[k]$ is non-zero for $k=0, 1, 2$.
$h[1-k]$ is non-zero for $k=0$ (where $h[1]$) and $k=1$ (where $h[0]$).

The overlap occurs at $k=0$ and $k=1$.
$y[1] = x[0]h[1-0] + x[1]h[1-1]$
$y[1] = x[0]h[1] + x[1]h[0]$
$y[1] = (1)(-1) + (2)(1)$
$y[1] = -1 + 2 = 1$

**For $n=2$:**
We need to compute $\sum_{k} x[k] h[2-k]$.
$h[2-k]$:
If $k=1$, $h[1] = -1$.
If $k=2$, $h[0] = 1$.

$x[k]$ is non-zero for $k=0, 1, 2$.
$h[2-k]$ is non-zero for $k=1$ (where $h[1]$) and $k=2$ (where $h[0]$).

The overlap occurs at $k=1$ and $k=2$.
$y[2] = x[1]h[2-1] + x[2]h[2-2]$
$y[2] = x[1]h[1] + x[2]h[0]$
$y[2] = (2)(-1) + (3)(1)$
$y[2] = -2 + 3 = 1$

**For $n=3$:**
We need to compute $\sum_{k} x[k] h[3-k]$.
$h[3-k]$:
If $k=2$, $h[1] = -1$.
If $k=3$, $h[0] = 1$.

$x[k]$ is non-zero for $k=0, 1, 2$.
$h[3-k]$ is non-zero for $k=2$ (where $h[1]$) and $k=3$ (where $h[0]$).

The overlap occurs only at $k=2$.
$y[3] = x[2]h[3-2]$
$y[3] = x[2]h[1]$
$y[3] = (3)(-1)$
$y[3] = -3$

### Step 4: Combine the Results

Collect all the computed values of $y[n]$ to form the output sequence.

For our example, the output sequence is:
$y[n] = \{-1, 1, 1, -3\}$ for $n = 0, 1, 2, 3$.

## Visualizing Convolution (Optional but Recommended)

A helpful way to visualize this process is by drawing out the sequences on a number line for each value of $n$.

1.  **Draw $x[k]$:** Place $x[k]$ on the horizontal axis.
2.  **Draw flipped $h[-k]$:** Draw $h[-k]$ on the same axis.
3.  **For each $n$, shift $h[-k]$ to $h[n-k]$:** Slide the flipped $h$ sequence by $n$ positions to the right.
4.  **Multiply overlapping points:** Where $x[k]$ and the shifted $h[n-k]$ overlap, multiply their values.
5.  **Sum the products:** The sum is $y[n]$.

This visual method can be particularly useful when dealing with longer sequences or when you want to double-check your calculations.

By following these steps, you can systematically compute the discrete-time convolution of any two finite-length sequences. This skill is crucial for understanding how LTI systems process signals.

## Supports

- [[skills/mathematics/signals-systems/lti-system-analysis/microskills/sequence-convolution-execution|Sequence Convolution Execution]]
