---
type: "medium"
title: "Understanding the Steps of Discrete-Time Convolution"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/lti-system-analysis/microskills/convolution-process-steps|Convolution Process Steps]]"
---
# Understanding the Steps of Discrete-Time Convolution

In the analysis of discrete-time systems, convolution is a fundamental operation. It allows us to determine the output of a Linear Time-Invariant (LTI) system given its impulse response and an input signal. To successfully compute this, we need to understand the individual steps involved in the convolution process. This lesson breaks down these core operations.

## The Convolution Sum

The discrete-time convolution sum is defined as:

$$ y[n] = x[n] * h[n] = \sum_{k=-\infty}^{\infty} x[k] h[n-k] $$

Where:
*   $y[n]$ is the output signal.
*   $x[n]$ is the input signal.
*   $h[n]$ is the impulse response of the system.
*   $n$ is the time index.
*   $k$ is the summation index.

This formula represents the core idea, but understanding *how* to apply it involves a sequence of manipulations on the input signals.

## The Four Key Operations

The computation of the discrete-time convolution sum can be broken down into four distinct, sequential operations. Let's visualize these using two example sequences:

*   Input signal: $x[n] = \{1, 2, 1\}$ for $n=0, 1, 2$, and $0$ otherwise.
*   Impulse response: $h[n] = \{1, 2\}$ for $n=0, 1$, and $0$ otherwise.

We can represent these signals as:
$x[n] = \{ \dots, 0, 1, 2, 1, 0, \dots \}$ (where the $1$ is at index $0$)
$h[n] = \{ \dots, 0, 1, 2, 0, \dots \}$ (where the $1$ is at index $0$)

### Step 1: Flip One Sequence

The first step is to "flip" one of the sequences. Conventionally, we flip the impulse response, $h[n]$. Flipping means reversing its time index. If $h[n]$ is defined for indices $n$, then its flipped version, $h[-n]$, is defined for indices $-n$.

For our example:
*   $h[n] = \{1, 2\}$ for $n=0, 1$.
*   Flipped $h[-n]$:
    *   At $n=0$, $h[0] = 1$. So $h[-0] = h[0] = 1$.
    *   At $n=1$, $h[1] = 2$. So $h[-1] = h[1] = 2$.
    *   For any other $n$, $h[n]=0$, so $h[-n]=0$.

Visually, $h[-n]$ looks like:
$h[-n] = \{ \dots, 0, 2, 1, 0, \dots \}$ (where the $1$ is now at index $0$, and the $2$ is at index $-1$). The original index $0$ has moved to index $0$, and the original index $1$ has moved to index $-1$.

### Step 2: Shift the Flipped Sequence

Next, we "shift" the flipped sequence by an integer amount, let's call it $m$. This shift is represented by $h[m-k]$. This operation means we are taking the flipped sequence and moving it along the time axis by $m$ units.

Think of $m$ as the index of the output signal $y[n]$ that we are currently trying to compute. For each value of $m$, we will perform the multiplication and summation.

Let's illustrate for a few shifts $m$:

*   **Shift $m=0$**: $h[0-k] = h[-k]$. This is our flipped sequence.
    $h[0-k] = \{ \dots, 0, 2, 1, 0, \dots \}$ (where $1$ is at index $0$).

*   **Shift $m=1$**: $h[1-k]$. This means we shift $h[-k]$ by $1$ unit to the right.
    *   The $1$ at index $0$ in $h[-k]$ moves to index $1$.
    *   The $2$ at index $-1$ in $h[-k]$ moves to index $0$.
    $h[1-k] = \{ \dots, 0, 1, 2, 0, \dots \}$ (where $2$ is at index $0$).

*   **Shift $m=2$**: $h[2-k]$. Shift $h[-k]$ by $2$ units to the right.
    *   The $1$ at index $0$ in $h[-k]$ moves to index $2$.
    *   The $2$ at index $-1$ in $h[-k]$ moves to index $1$.
    $h[2-k] = \{ \dots, 0, 0, 2, 1, 0, \dots \}$ (where $1$ is at index $2$).

Notice that as $m$ increases, the flipped sequence $h[m-k]$ slides to the right.

### Step 3: Multiply Pointwise

At each specific shift $m$, we multiply the input signal $x[k]$ by the shifted and flipped impulse response $h[m-k]$. This multiplication is done point-by-point for all possible values of $k$.

Let's continue with our example, focusing on specific shifts $m$:

*   **Shift $m=0$**: We need to compute $\sum_{k} x[k] h[0-k]$.
    *   $x[k]$: $\{ \dots, 0, 1, 2, 1, 0, \dots \}$ (at indices $0, 1, 2$)
    *   $h[0-k]$: $\{ \dots, 0, 2, 1, 0, \dots \}$ (at indices $-1, 0$)

    We align these sequences based on their index $k$ and multiply where they overlap:
    ```
    k:   -1  0  1  2  3 ...
    x[k]:    0  1  2  1  0
    h[0-k]:  2  1  0  0  0  <-- Note: h[-1]=2, h[0]=1
    ---------------------
    Prod:    0  1  0  0  0
    ```
    *   For $k=-1$: $x[-1] \times h[0-(-1)] = 0 \times h[1] = 0 \times 2 = 0$.
    *   For $k=0$: $x[0] \times h[0-0] = x[0] \times h[0] = 1 \times 1 = 1$.
    *   For $k=1$: $x[1] \times h[0-1] = x[1] \times h[-1] = 2 \times 0 = 0$.
    *   For $k=2$: $x[2] \times h[0-2] = x[2] \times h[-2] = 1 \times 0 = 0$.

*   **Shift $m=1$**: We need to compute $\sum_{k} x[k] h[1-k]$.
    *   $x[k]$: $\{ \dots, 0, 1, 2, 1, 0, \dots \}$ (at indices $0, 1, 2$)
    *   $h[1-k]$: $\{ \dots, 0, 1, 2, 0, \dots \}$ (at indices $0, 1$)

    ```
    k:   -1  0  1  2  3 ...
    x[k]:    0  1  2  1  0
    h[1-k]:  0  1  2  0  0  <-- Note: h[1]=2, h[0]=1
    ---------------------
    Prod:    0  1  4  0  0
    ```
    *   For $k=0$: $x[0] \times h[1-0] = x[0] \times h[1] = 1 \times 2 = 2$.
    *   For $k=1$: $x[1] \times h[1-1] = x[1] \times h[0] = 2 \times 1 = 2$.
    *   For $k=2$: $x[2] \times h[1-2] = x[2] \times h[-1] = 1 \times 0 = 0$.
    The sum of products is $2+2=4$.

*   **Shift $m=2$**: We need to compute $\sum_{k} x[k] h[2-k]$.
    *   $x[k]$: $\{ \dots, 0, 1, 2, 1, 0, \dots \}$ (at indices $0, 1, 2$)
    *   $h[2-k]$: $\{ \dots, 0, 0, 2, 1, 0, \dots \}$ (at indices $1, 2$)

    ```
    k:   -1  0  1  2  3 ...
    x[k]:    0  1  2  1  0
    h[2-k]:  0  0  1  2  0  <-- Note: h[1]=2, h[0]=1
    ---------------------
    Prod:    0  0  2  2  0
    ```
    *   For $k=0$: $x[0] \times h[2-0] = x[0] \times h[2] = 1 \times 0 = 0$.
    *   For $k=1$: $x[1] \times h[2-1] = x[1] \times h[1] = 2 \times 2 = 4$.
    *   For $k=2$: $x[2] \times h[2-2] = x[2] \times h[0] = 1 \times 1 = 1$.
    The sum of products is $4+1=5$.

### Step 4: Sum the Products

The final step is to sum all the products obtained in Step 3 for a given shift $m$. This sum gives you the value of the output signal $y[n]$ at that specific time index $m$. You repeat steps 2 through 4 for all possible values of $m$ where the product is non-zero to obtain the complete output sequence $y[n]$.

Continuing our example:

*   **Shift $m=0$**: Sum of products = $0$. So, $y[0] = 0$.
*   **Shift $m=1$**: Sum of products = $1+2=3$. Oops, let's re-check the multiplication step for m=1.
    *   $x[k]$: $\{ \dots, 0, 1, 2, 1, 0, \dots \}$ (at indices $0, 1, 2$)
    *   $h[1-k]$: $\{ \dots, 0, 1, 2, 0, \dots \}$ (at indices $0, 1$)
    ```
    k:   -1  0  1  2  3 ...
    x[k]:    0  1  2  1  0
    h[1-k]:  0  1  2  0  0
    ---------------------
    Prod:    0  1  4  0  0
    ```
    Ah, the previous calculation was slightly off. Let's trace the elements carefully.
    *   k=0: $x[0] * h[1-0] = x[0] * h[1] = 1 * 2 = 2$.
    *   k=1: $x[1] * h[1-1] = x[1] * h[0] = 2 * 1 = 2$.
    Sum for m=1 = $2+2=4$. So $y[1] = 4$.

*   **Shift $m=2$**: Sum of products = $4+1=5$. So, $y[2] = 5$.

Let's consider shifts beyond $m=2$ to see when the output becomes zero.

*   **Shift $m=3$**: We need to compute $\sum_{k} x[k] h[3-k]$.
    *   $x[k]$: $\{ \dots, 0, 1, 2, 1, 0, \dots \}$ (at indices $0, 1, 2$)
    *   $h[3-k]$: $\{ \dots, 0, 0, 1, 2, 0, \dots \}$ (at indices $2, 3$)

    ```
    k:   -1  0  1  2  3 ...
    x[k]:    0  1  2  1  0
    h[3-k]:  0  0  0  1  2  <-- Note: h[1]=2, h[0]=1
    ---------------------
    Prod:    0  0  0  1  0
    ```
    *   For $k=2$: $x[2] \times h[3-2] = x[2] \times h[1] = 1 \times 2 = 2$.
    *   For $k=3$: $x[3] \times h[3-3] = x[3] \times h[0] = 0 \times 1 = 0$.
    Sum for m=3 = $2$. So $y[3] = 2$.

Let's re-evaluate the ranges carefully.
$x[n]$ is non-zero for $n \in [0, 2]$.
$h[n]$ is non-zero for $n \in [0, 1]$.
$h[n-k]$ is non-zero for $n-k \in [0, 1]$, which means $k \in [n-1, n]$.
For the product $x[k]h[n-k]$ to be non-zero, $k$ must be in the range $[0, 2]$ (for $x[k]$) AND in the range $[n-1, n]$ (for $h[n-k]$).
The convolution sum is non-zero when the ranges of $k$ overlap.

Let's restart the worked example with this understanding.
$x[n] = \{1, 2, 1\}$ for $n=0, 1, 2$.
$h[n] = \{1, 2\}$ for $n=0, 1$.

Flipped $h[-k]$ has values: $h[0]=1$ at $k=0$, $h[1]=2$ at $k=-1$.
So $h[-k] = \{ \dots, 2, 1, 0, \dots \}$ at $k=-1, 0$.

**Calculate $y[n]$ for different $n$:**

*   **$n=0$**: $y[0] = \sum_{k} x[k] h[0-k]$.
    $x[k]$: $\{ \dots, 0, 1, 2, 1, 0, \dots \}$ (indices $0, 1, 2$)
    $h[0-k]$: $\{ \dots, 2, 1, 0, \dots \}$ (indices $-1, 0$)
    Overlap at $k=0$: $x[0] \times h[0-0] = 1 \times h[0] = 1 \times 1 = 1$.
    So $y[0] = 1$.

*   **$n=1$**: $y[1] = \sum_{k} x[k] h[1-k]$.
    $x[k]$: $\{ \dots, 0, 1, 2, 1, 0, \dots \}$ (indices $0, 1, 2$)
    $h[1-k]$: $h[-k]$ shifted by 1. $h[1-0]=h[1]=2$ at $k=0$, $h[1-1]=h[0]=1$ at $k=1$.
    $h[1-k]$: $\{ \dots, 0, 2, 1, 0, \dots \}$ (indices $0, 1$)
    Overlap:
    *   $k=0$: $x[0] \times h[1-0] = 1 \times h[1] = 1 \times 2 = 2$.
    *   $k=1$: $x[1] \times h[1-1] = 2 \times h[0] = 2 \times 1 = 2$.
    Sum = $2 + 2 = 4$. So $y[1] = 4$.

*   **$n=2$**: $y[2] = \sum_{k} x[k] h[2-k]$.
    $x[k]$: $\{ \dots, 0, 1, 2, 1, 0, \dots \}$ (indices $0, 1, 2$)
    $h[2-k]$: $h[-k]$ shifted by 2. $h[2-1]=h[1]=2$ at $k=1$, $h[2-2]=h[0]=1$ at $k=2$.
    $h[2-k]$: $\{ \dots, 0, 0, 2, 1, 0, \dots \}$ (indices $1, 2$)
    Overlap:
    *   $k=1$: $x[1] \times h[2-1] = 2 \times h[1] = 2 \times 2 = 4$.
    *   $k=2$: $x[2] \times h[2-2] = 1 \times h[0] = 1 \times 1 = 1$.
    Sum = $4 + 1 = 5$. So $y[2] = 5$.

*   **$n=3$**: $y[3] = \sum_{k} x[k] h[3-k]$.
    $x[k]$: $\{ \dots, 0, 1, 2, 1, 0, \dots \}$ (indices $0, 1, 2$)
    $h[3-k]$: $h[-k]$ shifted by 3. $h[3-2]=h[1]=2$ at $k=2$, $h[3-3]=h[0]=1$ at $k=3$.
    $h[3-k]$: $\{ \dots, 0, 0, 0, 2, 1, 0, \dots \}$ (indices $2, 3$)
    Overlap:
    *   $k=2$: $x[2] \times h[3-2] = 1 \times h[1] = 1 \times 2 = 2$.
    *   $k=3$: $x[3] \times h[3-3] = 0 \times h[0] = 0 \times 1 = 0$.
    Sum = $2 + 0 = 2$. So $y[3] = 2$.

*   **$n=4$**: $y[4] = \sum_{k} x[k] h[4-k]$.
    $x[k]$: $\{ \dots, 0, 1, 2, 1, 0, \dots \}$ (indices $0, 1, 2$)
    $h[4-k]$: $h[-k]$ shifted by 4. $h[4-3]=h[1]=2$ at $k=3$, $h[4-4]=h[0]=1$ at $k=4$.
    $h[4-k]$: $\{ \dots, 0, 0, 0, 0, 2, 1, 0, \dots \}$ (indices $3, 4$)
    Overlap: No overlap with $x[k]$ which is zero for $k \ge 3$.
    Sum = $0$. So $y[4] = 0$.

The output sequence is $y[n] = \{1, 4, 5, 2\}$.

By understanding and practicing these four operations – flip, shift, multiply, and sum – you build the foundation for computing discrete-time convolution and analyzing LTI systems.

## Supports

- [[skills/mathematics/lti-system-analysis/microskills/convolution-process-steps|Convolution Process Steps]]
