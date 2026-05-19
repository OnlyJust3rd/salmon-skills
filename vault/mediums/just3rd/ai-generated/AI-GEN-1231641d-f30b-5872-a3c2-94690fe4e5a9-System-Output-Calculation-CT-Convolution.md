---
type: "medium"
title: "Calculating System Output with CT Convolution"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/lti-system-analysis/microskills/system-output-calculation-ct-convolution|System Output Calculation (CT Convolution)]]"
---
# Calculating System Output with CT Convolution

This lesson focuses on the practical application of the continuous-time convolution integral to determine the output of a Linear Time-Invariant (LTI) system. You will learn how to perform this calculation step-by-step when given the system's impulse response and the input signal.

## Understanding the Convolution Integral

The output of an LTI system, denoted by \(y(t)\), is related to the input signal \(x(t)\) and the system's impulse response \(h(t)\) by the convolution integral:

$$ y(t) = x(t) * h(t) = \int_{-\infty}^{\infty} x(\tau) h(t - \tau) d\tau $$

This formula essentially tells us that the output at any time \(t\) is a weighted sum of past, present, and future inputs, where the weights are determined by the time-reversed and shifted impulse response.

## Steps for Applying the Convolution Integral

To compute \(y(t)\), we follow a systematic procedure:

1.  **Sketch \(x(\tau)\) and \(h(\tau)\):** Draw the input signal \(x(t)\) and the impulse response \(h(t)\).
2.  **Flip and Shift \(h(\tau)\):** Consider the function \(h(t - \tau)\). This involves two operations:
    *   **Flipping:** Replace \(\tau\) with \(-\tau\) to get \(h(-\tau)\). This reflects the function about the vertical axis.
    *   **Shifting:** Replace \(t\) with \(t - \tau\) to get \(h(t - \tau)\). This shifts the flipped function by \(t\) units along the \(\tau\)-axis.
3.  **Multiply \(x(\tau)\) and \(h(t - \tau)\):** For a *fixed* value of \(t\), graphically overlay the sketches of \(x(\tau)\) and \(h(t - \tau)\). The product \(x(\tau) h(t - \tau)\) will be non-zero only in the region(s) where both signals overlap.
4.  **Integrate:** Integrate the product \(x(\tau) h(t - \tau)\) with respect to \(\tau\) over all values of \(\tau\). This integral gives you the value of the output \(y(t)\) at that *specific* time \(t\).
5.  **Vary \(t\):** Repeat steps 3 and 4 for different values of \(t\). As \(t\) changes, the shifted impulse response \(h(t - \tau)\) moves, and the region of overlap and its integral will change, thus defining \(y(t)\) for all \(t\).

## Worked Example

Let's calculate the output \(y(t)\) of an LTI system with impulse response \(h(t) = u(t) - u(t-1)\) (a rectangular pulse of width 1 from \(t=0\) to \(t=1\)) when the input signal is \(x(t) = e^{-at}u(t)\) (a decaying exponential for \(t \ge 0\)), where \(a > 0\).

We need to compute:
$$ y(t) = \int_{-\infty}^{\infty} x(\tau) h(t - \tau) d\tau $$

**Step 1: Sketch \(x(\tau)\) and \(h(\tau)\)**

*   \(x(\tau) = e^{-a\tau}u(\tau)\): This is an exponential that is zero for \(\tau < 0\) and \(e^{-a\tau}\) for \(\tau \ge 0\).
*   \(h(\tau) = u(\tau) - u(\tau-1)\): This is a pulse that is 1 for \(0 \le \tau < 1\) and 0 elsewhere.

**Step 2: Flip and Shift \(h(\tau)\) to get \(h(t - \tau)\)**

*   \(h(-\tau)\): Reflect \(h(\tau)\) about the \(\tau=0\) axis. This pulse is 1 for \(-1 < \tau \le 0\) and 0 elsewhere.
*   \(h(t - \tau)\): Shift \(h(-\tau)\) by \(t\) units.
    *   If \(t < 0\), the pulse \(h(t - \tau)\) is 1 for \(t-1 < \tau \le t\).
    *   If \(t \ge 0\), the pulse \(h(t - \tau)\) is 1 for \(t-1 < \tau \le t\).

**Step 3 & 4: Multiply \(x(\tau)\) and \(h(t - \tau)\) and Integrate**

We need to consider the overlap between \(x(\tau) = e^{-a\tau}u(\tau)\) and \(h(t - \tau)\). The function \(x(\tau)\) is non-zero only for \(\tau \ge 0\). The function \(h(t - \tau)\) is non-zero only for \(t-1 < \tau \le t\).

Let's analyze different ranges of \(t\):

**Case 1: \(t < 0\)**
In this case, the interval \((t-1, t]\) is entirely to the left of \(\tau=0\). Since \(x(\tau)\) is zero for \(\tau < 0\), there is no overlap.
\(x(\tau) h(t - \tau) = 0\) for all \(\tau\).
$$ y(t) = \int_{-\infty}^{\infty} 0 \, d\tau = 0 \quad \text{for } t < 0 $$

**Case 2: \(0 \le t < 1\)**
Here, \(x(\tau) = e^{-a\tau}\) for \(\tau \ge 0\).
The pulse \(h(t - \tau)\) is 1 for \(t-1 < \tau \le t\).
The overlap occurs for \(0 \le \tau \le t\).
So, \(x(\tau) h(t - \tau) = e^{-a\tau}\) for \(0 \le \tau \le t\), and 0 elsewhere in the integration range.
$$ y(t) = \int_{0}^{t} e^{-a\tau} \, d\tau = \left[ -\frac{1}{a} e^{-a\tau} \right]_{0}^{t} = -\frac{1}{a} e^{-at} - (-\frac{1}{a} e^{0}) = \frac{1}{a}(1 - e^{-at}) \quad \text{for } 0 \le t < 1 $$

**Case 3: \(t \ge 1\)**
Here, \(x(\tau) = e^{-a\tau}\) for \(\tau \ge 0\).
The pulse \(h(t - \tau)\) is 1 for \(t-1 < \tau \le t\).
The overlap occurs for \(t-1 < \tau \le t\). However, since \(x(\tau)\) is only defined for \(\tau \ge 0\), the integration range becomes \(\max(0, t-1) < \tau \le t\). For \(t \ge 1\), this simplifies to \(t-1 < \tau \le t\).
So, \(x(\tau) h(t - \tau) = e^{-a\tau}\) for \(t-1 < \tau \le t\), and 0 elsewhere in the integration range.
$$ y(t) = \int_{t-1}^{t} e^{-a\tau} \, d\tau = \left[ -\frac{1}{a} e^{-a\tau} \right]_{t-1}^{t} = -\frac{1}{a} e^{-at} - (-\frac{1}{a} e^{-a(t-1)}) = \frac{1}{a} (e^{-at+a} - e^{-at}) = \frac{e^a}{a} (e^{-at} - e^{-at}) \quad \text{Oops, mistake in algebra} $$
Let's re-calculate:
$$ y(t) = \int_{t-1}^{t} e^{-a\tau} \, d\tau = \left[ -\frac{1}{a} e^{-a\tau} \right]_{t-1}^{t} = -\frac{1}{a} e^{-at} - (-\frac{1}{a} e^{-a(t-1)}) = \frac{1}{a} (e^{-at+a} - e^{-at}) = \frac{e^a}{a} e^{-at} - \frac{1}{a} e^{-at} = \frac{e^{-at}}{a} (e^a - 1) $$
Wait, that's not right. Let's redo the calculation:
$$ y(t) = \left[ -\frac{1}{a} e^{-a\tau} \right]_{t-1}^{t} = \left(-\frac{1}{a} e^{-at}\right) - \left(-\frac{1}{a} e^{-a(t-1)}\right) $$
$$ y(t) = -\frac{1}{a} e^{-at} + \frac{1}{a} e^{-at + a} = \frac{1}{a} (e^{-at+a} - e^{-at}) $$
$$ y(t) = \frac{1}{a} e^{-at} (e^a - 1) \quad \text{for } t \ge 1 $$

Let's check the algebra again. It should be:
$$ y(t) = \frac{1}{a} (e^{-a(t-1)} - e^{-at}) = \frac{1}{a} (e^{-at}e^a - e^{-at}) = \frac{e^{-at}}{a} (e^a - 1) $$
This still feels off. Let's be extremely careful.

$$ y(t) = \int_{t-1}^{t} e^{-a\tau} \, d\tau $$
Let \(u = -a\tau\), then \(du = -a \, d\tau\), so \(d\tau = -\frac{1}{a} du\).
When \(\tau = t-1\), \(u = -a(t-1) = -at + a\).
When \(\tau = t\), \(u = -at\).
$$ y(t) = \int_{-at+a}^{-at} e^{u} (-\frac{1}{a} du) = -\frac{1}{a} \int_{-at+a}^{-at} e^{u} du $$
$$ y(t) = -\frac{1}{a} [e^u]_{-at+a}^{-at} = -\frac{1}{a} (e^{-at} - e^{-at+a}) $$
$$ y(t) = \frac{1}{a} (e^{-at+a} - e^{-at}) = \frac{1}{a} (e^{-at}e^a - e^{-at}) = \frac{e^{-at}}{a} (e^a - 1) $$
There must be a conceptual error if the exponential term does not decrease.

Let's go back to the formula and ensure the limits and functions are correct.
\(x(\tau) = e^{-a\tau}\) for \(\tau \ge 0\).
\(h(t - \tau) = 1\) for \(t-1 < \tau \le t\).
For \(t \ge 1\), the overlap is indeed from \(t-1\) to \(t\).
So, we are integrating \(e^{-a\tau}\) from \(t-1\) to \(t\).

$$ y(t) = \int_{t-1}^{t} e^{-a\tau} d\tau = \left[-\frac{1}{a} e^{-a\tau}\right]_{t-1}^{t} $$
$$ = -\frac{1}{a} e^{-at} - \left(-\frac{1}{a} e^{-a(t-1)}\right) $$
$$ = -\frac{1}{a} e^{-at} + \frac{1}{a} e^{-at+a} $$
$$ = \frac{1}{a} (e^{-at+a} - e^{-at}) $$
$$ = \frac{1}{a} (e^a e^{-at} - e^{-at}) $$
$$ = \frac{e^{-at}}{a} (e^a - 1) $$

Let's check the case when \(t\) is very large. \(y(t)\) should approach zero. If \(e^a - 1 > 0\) (which it is for \(a>0\)), then \(y(t)\) will indeed approach zero as \(t \to \infty\).

So, the output is:
$$ y(t) = \begin{cases} 0 & t < 0 \\ \frac{1}{a}(1 - e^{-at}) & 0 \le t < 1 \\ \frac{e^{-at}}{a} (e^a - 1) & t \ge 1 \end{cases} $$

## Common Mistakes

*   **Incorrectly flipping or shifting:** Ensure you perform both reflections and shifts correctly when forming \(h(t - \tau)\).
*   **Missing overlap regions:** Carefully consider all possible values of \(t\) and the resulting overlap between \(x(\tau)\) and \(h(t - \tau)\).
*   **Algebraic errors:** Convolution calculations can involve complex algebra. Double-check your integration and simplification steps.
*   **Confusing \(\tau\) and \(t\):** Remember that \(t\) is a fixed parameter during the integration with respect to \(\tau\).

By following these steps and being mindful of potential pitfalls, you can effectively apply the continuous-time convolution integral to find the output of LTI systems.

## Supports

- [[skills/mathematics/lti-system-analysis/microskills/system-output-calculation-ct-convolution|System Output Calculation (CT Convolution)]]
