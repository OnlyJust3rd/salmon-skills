---
type: "medium"
title: "Time-Invariance: How the System Responds to Shifts in Time"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/signals-systems/system-property-analysis/microskills/time-invariance-and-input-output-relationship|time-invariance-and-input-output-relationship]]"
related-skills:
  - "[[skills/mathematics/signals-systems/system-property-analysis/system-property-analysis|system-property-analysis]]"
learning-time-in-minutes: 5
---
# Time-Invariance: How the System Responds to Shifts in Time

In analyzing how systems behave, one crucial property is **time-invariance**. This property tells us whether a system's response to an input signal depends on *when* that signal is applied. If a system is time-invariant, its behavior is consistent over time. Shifting the input in time will result in an identical, but shifted, output.

## Understanding Time-Invariance

A system is considered **time-invariant** if, for any input \(x(t)\) and any time shift \(t_0\), applying the input \(x(t - t_0)\) results in an output that is simply the original output \(y(t)\) shifted by the same amount, \(y(t - t_0)\).

Mathematically, this can be expressed as:

If \(y(t) = T\{x(t)\}\) (where \(T\{\cdot\}\) represents the system's operation), then the system is time-invariant if:

$$ T\{x(t - t_0)\} = y(t - t_0) $$

for all input signals \(x(t)\) and all time shifts \(t_0\).

Conversely, if the system's output changes in a way that is *not* a simple time shift when the input is time-shifted, the system is **time-variant**.

### Intuitive Example: A Simple Audio Amplifier

Imagine an audio amplifier.
*   **Time-Invariant Amplifier:** If you play a note at 1 PM and it sounds a certain way, and then you play the *exact same note* at 2 PM, the amplified sound should be identical, just occurring an hour later. The amplifier's characteristics (gain, distortion, etc.) don't change over that hour.
*   **Time-Variant Amplifier:** Now, imagine an amplifier that automatically increases its gain over time as it heats up. If you play a note at 1 PM, it might sound moderately amplified. If you play the same note at 2 PM, it might sound much louder due to the increased gain. This amplifier is time-variant because its response depends on *when* the input is applied.

## Analyzing Time-Invariance with Examples

Let's look at some common system operations to see if they are time-invariant.

### Example 1: A Simple Delay System

Consider a system that delays the input signal by a fixed amount, say 2 seconds.
The output \(y(t)\) is given by:
$$ y(t) = x(t - 2) $$

Let's test for time-invariance.
1.  **Original Input:** \(x(t)\)
2.  **Original Output:** \(y(t) = x(t - 2)\)

Now, let's shift the input by \(t_0\):
1.  **Shifted Input:** \(x_{shifted}(t) = x(t - t_0)\)
2.  **System's Response to Shifted Input:** \(T\{x(t - t_0)\}\)

Applying the system's rule (delay by 2 seconds) to the shifted input:
$$ T\{x(t - t_0)\} = x((t - t_0) - 2) $$
$$ T\{x(t - t_0)\} = x(t - 2 - t_0) $$

Now, let's compare this to the time-shifted original output. The original output was \(y(t) = x(t - 2)\). Shifting this by \(t_0\) gives:
$$ y(t - t_0) = x((t - t_0) - 2) $$
$$ y(t - t_0) = x(t - 2 - t_0) $$

Since \(T\{x(t - t_0)\} = y(t - t_0)\), the delay system is **time-invariant**.

### Example 2: A System with a Time-Varying Gain

Consider a system where the output is the input multiplied by the current time.
The output \(y(t)\) is given by:
$$ y(t) = t \cdot x(t) $$

Let's test for time-invariance.
1.  **Original Input:** \(x(t)\)
2.  **Original Output:** \(y(t) = t \cdot x(t)\)

Now, shift the input by \(t_0\):
1.  **Shifted Input:** \(x_{shifted}(t) = x(t - t_0)\)
2.  **System's Response to Shifted Input:** \(T\{x(t - t_0)\}\)

Applying the system's rule (multiply by time \(t\)) to the shifted input:
$$ T\{x(t - t_0)\} = t \cdot x(t - t_0) $$

Now, let's look at the time-shifted original output. The original output was \(y(t) = t \cdot x(t)\). Shifting this by \(t_0\) gives:
$$ y(t - t_0) = (t - t_0) \cdot x(t - t_0) $$

Comparing the two:
*   System's response to shifted input: \(t \cdot x(t - t_0)\)
*   Time-shifted original output: \((t - t_0) \cdot x(t - t_0)\)

These two are not equal in general (unless \(t_0 = 0\) or \(x(t-t_0) = 0\)). For example, if \(t_0 = 1\), the system's response is \(t \cdot x(t-1)\), but the shifted output is \((t-1) \cdot x(t-1)\). The gain factor \(t\) is applied directly, not shifted with the input. Therefore, this system is **time-variant**.

### Example 3: A System with a Time-Dependent Exponent

Consider a system where the output is the input raised to a power that changes with time.
The output \(y(t)\) is given by:
$$ y(t) = x(t)^2 $$

1.  **Original Input:** \(x(t)\)
2.  **Original Output:** \(y(t) = x(t)^2\)

Shift the input by \(t_0\):
1.  **Shifted Input:** \(x_{shifted}(t) = x(t - t_0)\)
2.  **System's Response to Shifted Input:** \(T\{x(t - t_0)\}\)

Applying the system's rule (square the input):
$$ T\{x(t - t_0)\} = (x(t - t_0))^2 $$

Now, let's look at the time-shifted original output. The original output was \(y(t) = x(t)^2\). Shifting this by \(t_0\) gives:
$$ y(t - t_0) = (x(t - t_0))^2 $$

In this case, \(T\{x(t - t_0)\} = y(t - t_0)\). So, this squaring system is **time-invariant**.

### Example 4: A System with Time-Dependent Amplitude and Frequency Modulation

Consider a system where the output is the input modulated by a time-varying sine wave.
The output \(y(t)\) is given by:
$$ y(t) = x(t) \cdot \sin(t) $$

1.  **Original Input:** \(x(t)\)
2.  **Original Output:** \(y(t) = x(t) \cdot \sin(t)\)

Shift the input by \(t_0\):
1.  **Shifted Input:** \(x_{shifted}(t) = x(t - t_0)\)
2.  **System's Response to Shifted Input:** \(T\{x(t - t_0)\}\)

Applying the system's rule:
$$ T\{x(t - t_0)\} = x(t - t_0) \cdot \sin(t) $$

Now, let's look at the time-shifted original output. The original output was \(y(t) = x(t) \cdot \sin(t)\). Shifting this by \(t_0\) gives:
$$ y(t - t_0) = x(t - t_0) \cdot \sin(t - t_0) $$

Comparing the two:
*   System's response to shifted input: \(x(t - t_0) \cdot \sin(t)\)
*   Time-shifted original output: \(x(t - t_0) \cdot \sin(t - t_0)\)

These are not equal because the \(\sin(t)\) term is not shifted along with the input. The system's modulation characteristics change relative to the input's timing. Therefore, this system is **time-variant**.

## Key Takeaways for Time-Invariance

*   **Focus on the Operations:** Time-invariance is determined by the operations performed on the input signal. If any operation involves multiplication by time itself (e.g., \(t \cdot x(t)\)), addition of time to the input argument in a non-standard way (e.g., \(x(t + t)\)), or operations whose parameters change with time independently of the input shift, the system is likely time-variant.
*   **Simple Delays/Integrals are Often Time-Invariant:** Operations like adding a constant delay \((x(t-t_0))\) or integrating over a fixed interval are typically time-invariant.
*   **The Test is Universal:** To confirm time-invariance, you must show that \(T\{x(t - t_0)\} = y(t - t_0)\) holds for *all* possible input signals \(x(t)\) and *all* time shifts \(t_0\). If you can find just one counterexample, the system is time-variant.

## Supports

- [[skills/mathematics/signals-systems/system-property-analysis/microskills/time-invariance-and-input-output-relationship|Time-Invariance and Input-Output Relationship]]
