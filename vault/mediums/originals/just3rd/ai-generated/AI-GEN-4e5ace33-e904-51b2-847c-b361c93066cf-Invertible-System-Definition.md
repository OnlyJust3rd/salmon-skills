---
type: "medium"
title: "Understanding Invertible Systems"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/signals-systems/system-property-analysis/microskills/invertible-system-definition|invertible-system-definition]]"
learning-time-in-minutes: 6
---
# Understanding Invertible Systems

When analyzing systems, understanding if a system is "invertible" is a crucial criterion. An invertible system is one where you can uniquely determine the input signal if you know the output signal and the system itself. Think of it like a reversible process.

## What is an Invertible System?

A system is considered invertible if there exists another system, called the inverse system, that can recover the original input from the system's output.

Mathematically, if we have a system $S$ that transforms an input signal $x(t)$ into an output signal $y(t)$, so $y(t) = S\{x(t)\}$, the system $S$ is invertible if there exists an inverse system $S^{-1}$ such that applying $S^{-1}$ to the output $y(t)$ recovers the original input $x(t)$:

$$ S^{-1}\{y(t)\} = S^{-1}\{S\{x(t)\}\} = x(t) $$

This means that for every unique output, there must have been a unique input. If multiple different inputs could produce the same output, then knowing the output wouldn't be enough to tell you which input it came from, and the system would not be invertible.

## Key Criteria for Invertibility

The core idea behind invertibility is that the system does not "lose" information about the input when producing the output.

Here are the primary ways to determine if a system is invertible:

1.  **Unique Mapping from Input to Output:** For every distinct input signal, the system must produce a distinct output signal. If two different input signals, say $x_1(t)$ and $x_2(t)$ where $x_1(t) \neq x_2(t)$, produce the same output signal $y(t)$, then the system is not invertible. You wouldn't know if the input was $x_1(t)$ or $x_2(t)$ if you only observed $y(t)$.

2.  **Absence of Information Loss:** A system is invertible if and only if it is one-to-one (injective). This means no information about the input is irrecoverably lost during the transformation. For example, if a system always adds a constant to the input, you can never recover the original input because you don't know what that constant was.

## Examples

Let's look at some examples to clarify this concept.

### Example 1: A Simple Additive System (Not Invertible)

Consider a system where the output is the input plus a constant, say 5:

$$ y(t) = x(t) + 5 $$

If the output $y(t)$ is 10, what was the input $x(t)$?
$$ 10 = x(t) + 5 $$
$$ x(t) = 10 - 5 = 5 $$

This seems straightforward. However, consider if the input was $x_1(t) = 5$ and $x_2(t) = 6$.
If $x_1(t) = 5$, then $y_1(t) = 5 + 5 = 10$.
If $x_2(t) = 6$, then $y_2(t) = 6 + 5 = 11$.

Wait, that's not right. Let's rethink the "information loss" aspect. The problem isn't that we *can't* find *an* input, but rather that the system might collapse multiple inputs into one output.

Let's consider a simpler case where the system *always* adds 5, regardless of the input.

If the input is $x_1(t) = 3$, the output is $y(t) = 3 + 5 = 8$.
If the input is $x_2(t) = 4$, the output is $y(t) = 4 + 5 = 9$.

This system *is* invertible. If $y(t)=8$, then $x(t)=3$. If $y(t)=9$, then $x(t)=4$. We can always recover the input by subtracting 5: $x(t) = y(t) - 5$.

The classic example of a *non-invertible* system involves squashing information.

### Example 2: A Squaring System (Not Invertible)

Consider a system that squares the input signal:

$$ y(t) = x(t)^2 $$

Let's say the output signal $y(t)$ is 9. What could the input $x(t)$ have been?
$$ 9 = x(t)^2 $$
This means $x(t)$ could have been either 3 or -3.

Since two different inputs (3 and -3) can produce the same output (9), this system is **not invertible**. If you only know the output is 9, you cannot definitively say whether the original input was 3 or -3. Information has been lost.

### Example 3: A Delay System (Invertible)

Consider a system that delays the input signal by $T$ seconds:

$$ y(t) = x(t - T) $$

If we know the output $y(t)$, can we find the input $x(t)$?
Yes, the inverse system would be to advance the signal by $T$ seconds:

$$ S^{-1}\{y(t)\} = y(t + T) $$
And indeed,
$$ y(t + T) = x((t + T) - T) = x(t) $$

This system is **invertible** because each input signal produces a unique delayed output signal. There's no loss of information; the input is just shifted in time.

### Example 4: A System with Zeroes in its Frequency Response (Potentially Not Invertible)

For LTI (Linear Time-Invariant) systems, invertibility is closely related to the system's frequency response. If a system's frequency response, $H(\omega)$, has a zero at any frequency, it can lead to non-invertibility.

For instance, consider a system with the impulse response $h(t) = \delta(t) - \delta(t-1)$. This system subtracts the input from a delayed version of itself.

The frequency response is $H(\omega) = 1 - e^{-j\omega}$.
This response has zeroes when $e^{-j\omega} = 1$, which occurs at $\omega = 0, \pm 2\pi, \pm 4\pi, \dots$.

At $\omega=0$, $H(0) = 1 - e^{j \cdot 0} = 1 - 1 = 0$.
This zero at DC ($\omega=0$) means that any constant component in the input signal will be completely removed from the output. If the input was a constant signal $x(t) = C$, the output would be $y(t) = C - C = 0$. If you observe an output of 0, you cannot determine the value of $C$. Therefore, this system is **not invertible**.

## Why is Invertibility Important?

Understanding invertibility is crucial for several reasons:

*   **Signal Recovery:** If you're designing a system to transmit or store information, you often need to be able to recover the original information perfectly.
*   **System Design:** When designing cascaded systems, the invertibility of individual components can determine whether the overall system can be manipulated or reversed.
*   **Troubleshooting:** Identifying non-invertible systems can help pinpoint where information might be lost in a complex process.
*   **Mathematical Analysis:** Invertibility simplifies many mathematical operations and analyses of system behavior.

## Summary of Criteria

To quickly check for invertibility:

*   **General Systems:** Ask: "If I see the output, can I uniquely determine the input?" If yes, it's invertible. If no, it's not. This often means checking if the system maps different inputs to the same output.
*   **LTI Systems:** Examine the system's impulse response or frequency response. For continuous-time LTI systems, if the impulse response $h(t)$ is such that it can be "undone" by another stable LTI system. For discrete-time LTI systems, if the impulse response $h[n]$ is non-zero for at most one value of $n$, or if it can be undone. A common indicator of non-invertibility in LTI systems is the presence of zeroes in the frequency response.

## Supports

- [[skills/mathematics/signals-systems/system-property-analysis/microskills/invertible-system-definition|Invertible System Definition]]
