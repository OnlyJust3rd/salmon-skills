---
type: "medium"
title: "Determining the Output Sequence via Discrete-Time Convolution"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/signals-systems/lti-system-analysis/microskills/output-sequence-determination|output-sequence-determination]]"
learning-time-in-minutes: 5
---
# Determining the Output Sequence via Discrete-Time Convolution

This lesson focuses on the practical application of discrete-time convolution to find the output sequence of a system. By understanding and applying the convolution process, you'll be able to predict how a system responds to various inputs.

## The Core Idea: How Inputs Combine to Produce Output

In the context of Linear Time-Invariant (LTI) systems, the output sequence is a result of how the input signal interacts with the system's impulse response. Discrete-time convolution is the mathematical operation that precisely describes this interaction. It essentially involves "sliding" one sequence (usually the time-reversed impulse response) over the other (the input signal) and summing up the products at each position.

### Why is this important?

Knowing the output sequence allows us to:

*   **Analyze system behavior:** Understand how a system modifies an input signal.
*   **Design filters:** Create systems that selectively pass or block certain frequencies.
*   **Predict system responses:** Determine what the output will be for a given input without needing to run the actual physical system.

## The Convolution Summation Formula

The formal definition of discrete-time convolution for two sequences, $x[n]$ (input) and $h[n]$ (impulse response), to produce the output sequence $y[n]$ is given by the convolution sum:

$$
y[n] = x[n] * h[n] = \sum_{k=-\infty}^{\infty} x[k] h[n-k]
$$

Alternatively, you can use the equivalent form:

$$
y[n] = \sum_{k=-\infty}^{\infty} h[k] x[n-k]
$$

Where:
*   $n$ is the discrete time index for the output sequence.
*   $k$ is the summation index.
*   $x[k]$ is the input sequence at time $k$.
*   $h[n-k]$ is the time-reversed and shifted impulse response.

## Step-by-Step Process for Computing Convolution

Let's break down the process of calculating the output sequence using the convolution sum. We'll use the second form of the formula, $y[n] = \sum_{k=-\infty}^{\infty} h[k] x[n-k]$, as it's often more intuitive to visualize.

**Given:**
*   Input sequence: $x[n]$
*   Impulse response sequence: $h[n]$

**Steps:**

1.  **Reverse and Shift $h[n]$:** For a specific output time $n$, we need to consider the sequence $h[n-k]$. This means we take the impulse response $h[k]$, reverse it in time (i.e., consider $h[-k]$), and then shift it by $n$ units.

2.  **Multiply and Sum:** At each possible value of $k$, multiply $h[n-k]$ by $x[k]$.

3.  **Sum the Products:** Sum all these products over all possible values of $k$. This sum will give you the value of the output sequence $y[n]$ at the specific time $n$.

4.  **Repeat for all $n$:** To find the complete output sequence $y[n]$, you repeat steps 1-3 for all relevant time indices $n$.

### Determining the Range of $n$

If $x[n]$ is non-zero for $n_{x,start}$ to $n_{x,end}$ and $h[n]$ is non-zero for $n_{h,start}$ to $n_{h,end}$, the output $y[n]$ will be non-zero for $n$ ranging from $n_{x,start} + n_{h,start}$ to $n_{x,end} + n_{h,end}$. This is a crucial step to know how many output samples you need to compute.

## Worked Example: Finite-Length Sequences

Let's compute the output sequence $y[n]$ for the following input $x[n]$ and impulse response $h[n]$:

*   $x[n] = \{1, 2, 1\}$ for $n=0, 1, 2$ (and 0 otherwise).
    *   $n_{x,start} = 0$, $n_{x,end} = 2$
*   $h[n] = \{1, -1\}$ for $n=0, 1$ (and 0 otherwise).
    *   $n_{h,start} = 0$, $n_{h,end} = 1$

**Step 1: Determine the range of $n$ for $y[n]$**
The output $y[n]$ will be non-zero for $n$ from $0 + 0 = 0$ to $2 + 1 = 3$. So, we need to compute $y[0], y[1], y[2], y[3]$.

**Step 2: Visualize the Convolution**
We'll use the formula $y[n] = \sum_{k=-\infty}^{\infty} h[k] x[n-k]$. It's helpful to write out the sequences and their time-reversed and shifted versions.

Let's calculate each term of $y[n]$:

*   **For $n=0$:** $y[0] = \sum_{k=-\infty}^{\infty} h[k] x[0-k]$
    We need to find where $h[k]$ and $x[-k]$ overlap.
    *   $h[k]$ is $\{1, -1\}$ for $k=0, 1$.
    *   $x[-k]$ is $\{1, 2, 1\}$ for $-k=0, 1, 2$, which means $k=0, -1, -2$.
    The only overlap is at $k=0$.
    $y[0] = h[0]x[0-0] = h[0]x[0] = (1)(1) = 1$.

*   **For $n=1$:** $y[1] = \sum_{k=-\infty}^{\infty} h[k] x[1-k]$
    We need to find where $h[k]$ and $x[1-k]$ overlap.
    *   $h[k]$ is $\{1, -1\}$ for $k=0, 1$.
    *   $x[1-k]$ is $\{1, 2, 1\}$ for $1-k=0, 1, 2$, which means $k=1, 0, -1$.
    Overlaps occur at $k=0$ and $k=1$.
    $y[1] = h[0]x[1-0] + h[1]x[1-1] = h[0]x[1] + h[1]x[0] = (1)(2) + (-1)(1) = 2 - 1 = 1$.

*   **For $n=2$:** $y[2] = \sum_{k=-\infty}^{\infty} h[k] x[2-k]$
    We need to find where $h[k]$ and $x[2-k]$ overlap.
    *   $h[k]$ is $\{1, -1\}$ for $k=0, 1$.
    *   $x[2-k]$ is $\{1, 2, 1\}$ for $2-k=0, 1, 2$, which means $k=2, 1, 0$.
    Overlaps occur at $k=0$ and $k=1$.
    $y[2] = h[0]x[2-0] + h[1]x[2-1] = h[0]x[2] + h[1]x[1] = (1)(1) + (-1)(2) = 1 - 2 = -1$.

*   **For $n=3$:** $y[3] = \sum_{k=-\infty}^{\infty} h[k] x[3-k]$
    We need to find where $h[k]$ and $x[3-k]$ overlap.
    *   $h[k]$ is $\{1, -1\}$ for $k=0, 1$.
    *   $x[3-k]$ is $\{1, 2, 1\}$ for $3-k=0, 1, 2$, which means $k=3, 2, 1$.
    The only overlap is at $k=1$.
    $y[3] = h[1]x[3-1] = h[1]x[2] = (-1)(1) = -1$.

**Result:**
The output sequence is $y[n] = \{1, 1, -1, -1\}$ for $n=0, 1, 2, 3$.

## Common Pitfalls

*   **Incorrectly reversing or shifting $h[n]$:** Always ensure $h[n-k]$ is correctly formed for the specific $n$ you are calculating.
*   **Missing overlaps:** Carefully check for all instances where both $x[k]$ and $h[n-k]$ are non-zero simultaneously.
*   **Incorrectly determining the range of $n$:** This can lead to missing output samples or computing unnecessary ones.
*   **Arithmetic errors:** Double-check your multiplication and summation steps.

By systematically applying these steps and being mindful of potential errors, you can accurately compute the output sequence of an LTI system using discrete-time convolution.

## Supports

- [[skills/mathematics/signals-systems/lti-system-analysis/microskills/output-sequence-determination|Output Sequence Determination]]
