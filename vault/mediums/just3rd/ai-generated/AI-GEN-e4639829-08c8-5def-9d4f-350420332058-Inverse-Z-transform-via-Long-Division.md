---
type: "medium"
title: "Inverse Z-transform via Long Division"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/complex-frequency-domain-analysis/microskills/inverse-z-transform-via-long-division|inverse-z-transform-via-long-division]]"
---
# Inverse Z-transform via Long Division

This lesson focuses on a practical method for finding the time-domain representation of a discrete-time signal from its Z-transform, specifically using long division. This is a crucial step in understanding system responses and manipulating signals in the discrete-time frequency domain.

## Why Use Long Division?

When dealing with rational Z-transforms (which are ratios of polynomials in \(z^{-1}\) or \(z\)), long division provides a straightforward way to expand the transform into an infinite series. Each term in this series directly corresponds to a sample value of the time-domain signal. This method is particularly useful when other techniques like partial fraction expansion become cumbersome or when the region of convergence (ROC) indicates a causal or anti-causal signal that can be represented as a power series.

## The Process

The core idea is to perform polynomial long division on the Z-transform function, typically expressed as a ratio of polynomials in \(z^{-1}\).

1.  **Express the Z-transform as a ratio of polynomials in \(z^{-1}\):** Ensure your Z-transform, \(X(z)\), is in the form \(\frac{a_0 + a_1z^{-1} + a_2z^{-2} + ...}{b_0 + b_1z^{-1} + b_2z^{-2} + ...}\). If it's given in terms of \(z\), divide both the numerator and denominator by the highest power of \(z\) to get powers of \(z^{-1}\).
2.  **Perform Polynomial Long Division:** Divide the numerator polynomial by the denominator polynomial.
3.  **Interpret the Result:** The resulting infinite series will be of the form \(c_0 + c_1z^{-1} + c_2z^{-2} + c_3z^{-3} + ...\). The coefficients of this series are the time-domain sample values: \(x[0] = c_0\), \(x[1] = c_1\), \(x[2] = c_2\), and so on, for a causal signal. For an anti-causal signal, you would expand as a power series of \(z\).

## Practical Example: Causal Signal

Let's find the inverse Z-transform of \(X(z) = \frac{z}{z-0.5}\) for a causal signal.

First, express \(X(z)\) in terms of \(z^{-1}\):
\[
X(z) = \frac{z}{z-0.5} = \frac{z \cdot z^{-1}}{(z-0.5) \cdot z^{-1}} = \frac{1}{1-0.5z^{-1}}
\]

Now, perform long division:
```
        1   + 0.5z⁻¹ + 0.25z⁻² + 0.125z⁻³ + ...
      ____________________________________
1 - 0.5z⁻¹ | 1
        - (1 - 0.5z⁻¹)
        ___________
              0.5z⁻¹
            - (0.5z⁻¹ - 0.25z⁻²)
            _____________
                  0.25z⁻²
                - (0.25z⁻² - 0.125z⁻³)
                _______________
                      0.125z⁻³
                      ...
```

The resulting series is:
\[
X(z) = 1 + 0.5z^{-1} + 0.25z^{-2} + 0.125z^{-3} + ...
\]

Since this is a causal signal (indicated by the ROC $|z| > 0.5$), the coefficients correspond to the time-domain samples:
\[
x[n] = (0.5)^n u[n]
\]
So, \(x[0]=1\), \(x[1]=0.5\), \(x[2]=0.25\), and so on.

## Practice Task

Compute the inverse Z-transform of the following function using long division, assuming a causal signal:

\(X(z) = \frac{1}{1 - 1.2z^{-1} + 0.35z^{-2}}\)

Show the first five terms of the series expansion.

## Self-Check Questions

1.  What is the primary condition that makes the long division method for inverse Z-transforms particularly suitable?
2.  If the long division results in a series of the form \(c_0 + c_1z^{-1} + c_2z^{-2} + ...\), what do the coefficients \(c_0, c_1, c_2\) represent for a causal signal?
3.  How would you typically prepare a Z-transform given in terms of \(z\) before applying long division?

## Supports

- [[skills/mathematics/complex-frequency-domain-analysis/microskills/inverse-z-transform-via-long-division|Inverse Z-transform via Long Division]]
