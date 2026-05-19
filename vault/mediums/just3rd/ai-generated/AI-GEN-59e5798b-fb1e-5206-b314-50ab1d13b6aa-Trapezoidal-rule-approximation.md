---
type: "medium"
title: "Trapezoidal Rule Approximation"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/integral-evaluation/microskills/trapezoidal-rule-approximation|Trapezoidal rule approximation]]"
---
# Trapezoidal Rule Approximation

In our pursuit of **Integral Evaluation**, we've learned that finding exact analytical solutions for definite integrals can sometimes be challenging or impossible. This is where numerical integration techniques come to our aid, allowing us to **Apply Numerical Integration** by approximating the value of a definite integral. One of the fundamental methods we can use is the Trapezoidal Rule.

## What is the Trapezoidal Rule?

The Trapezoidal Rule is a way to approximate the area under a curve by dividing the interval of integration into smaller subintervals and approximating the area in each subinterval as a trapezoid. Instead of fitting a curve (like in more advanced methods), we simply connect the function values at the endpoints of each subinterval with a straight line, forming a trapezoid.

Consider a function $$f(x)$$ that we want to integrate from $$a\) to $$b$$, i.e., calculate $$ \int_{a}^{b} f(x) \, dx $$.

The Trapezoidal Rule involves partitioning the interval $$[a, b]$$ into $$n$$ subintervals of equal width. The width of each subinterval, denoted by $$ \Delta x $$, is calculated as:

$$ \Delta x = \frac{b - a}{n} $$

The endpoints of these subintervals are:
$$ x_0 = a, x_1 = a + \Delta x, x_2 = a + 2\Delta x, \dots, x_n = a + n\Delta x = b $$

## The Formula

The area of a single trapezoid with parallel sides $$h_1$$ and $$h_2$$ and height $$w$$ is given by $$ \frac{h_1 + h_2}{2} \times w $$. In our case, for each subinterval $$[x_i, x_{i+1}]$$:

*   The "heights" of the trapezoid are the function values at the endpoints: $$f(x_i)$$ and $$f(x_{i+1})$$.
*   The "width" of the trapezoid is the width of the subinterval: $$ \Delta x $$.

So, the area of the $$i$$-th trapezoid is: $$ \frac{f(x_i) + f(x_{i+1})}{2} \times \Delta x $$.

To approximate the total definite integral, we sum the areas of all $$n$$ trapezoids:

$$ \int_{a}^{b} f(x) \, dx \approx \sum_{i=0}^{n-1} \frac{f(x_i) + f(x_{i+1})}{2} \times \Delta x $$

Expanding this summation, we get:

$$ \int_{a}^{b} f(x) \, dx \approx \frac{\Delta x}{2} [ (f(x_0) + f(x_1)) + (f(x_1) + f(x_2)) + \dots + (f(x_{n-1}) + f(x_n)) ] $$

Notice that the intermediate function values ($$f(x_1), f(x_2), \dots, f(x_{n-1})$$) are each counted twice. The endpoints ($$f(x_0)$$ and $$f(x_n)$$) are counted only once. This leads to the simplified form of the Trapezoidal Rule:

$$ \int_{a}^{b} f(x) \, dx \approx \frac{\Delta x}{2} [ f(x_0) + 2f(x_1) + 2f(x_2) + \dots + 2f(x_{n-1}) + f(x_n) ] $$

Or, more compactly:

$$ \int_{a}^{b} f(x) \, dx \approx \frac{b-a}{2n} \left[ f(x_0) + 2\sum_{i=1}^{n-1} f(x_i) + f(x_n) \right] $$

## Worked Example

Let's approximate the definite integral $$ \int_{0}^{2} x^2 \, dx $$ using the Trapezoidal Rule with $$n=4$$ subintervals.

1.  **Identify the function and interval:**
    $$f(x) = x^2$$
    $$a = 0, b = 2$$

2.  **Determine the number of subintervals:**
    $$n = 4$$

3.  **Calculate the width of each subinterval:**
    $$ \Delta x = \frac{b - a}{n} = \frac{2 - 0}{4} = \frac{2}{4} = 0.5 $$

4.  **Determine the endpoints of the subintervals:**
    $$ x_0 = 0 $$
    $$ x_1 = 0 + 0.5 = 0.5 $$
    $$ x_2 = 0 + 2(0.5) = 1.0 $$
    $$ x_3 = 0 + 3(0.5) = 1.5 $$
    $$ x_4 = 0 + 4(0.5) = 2.0 $$

5.  **Evaluate the function at each endpoint:**
    $$ f(x_0) = f(0) = 0^2 = 0 $$
    $$ f(x_1) = f(0.5) = (0.5)^2 = 0.25 $$
    $$ f(x_2) = f(1.0) = (1.0)^2 = 1.0 $$
    $$ f(x_3) = f(1.5) = (1.5)^2 = 2.25 $$
    $$ f(x_4) = f(2.0) = (2.0)^2 = 4.0 $$

6.  **Apply the Trapezoidal Rule formula:**
    $$ \int_{0}^{2} x^2 \, dx \approx \frac{\Delta x}{2} [ f(x_0) + 2f(x_1) + 2f(x_2) + 2f(x_3) + f(x_4) ] $$
    $$ \int_{0}^{2} x^2 \, dx \approx \frac{0.5}{2} [ 0 + 2(0.25) + 2(1.0) + 2(2.25) + 4.0 ] $$
    $$ \int_{0}^{2} x^2 \, dx \approx 0.25 [ 0 + 0.5 + 2.0 + 4.5 + 4.0 ] $$
    $$ \int_{0}^{2} x^2 \, dx \approx 0.25 [ 11.0 ] $$
    $$ \int_{0}^{2} x^2 \, dx \approx 2.75 $$

**For comparison:** The exact value of $$ \int_{0}^{2} x^2 \, dx = [\frac{x^3}{3}]_{0}^{2} = \frac{2^3}{3} - \frac{0^3}{3} = \frac{8}{3} \approx 2.6667 $$. Our approximation of 2.75 is quite close.

## When to Use the Trapezoidal Rule

The Trapezoidal Rule is a good choice when:

*   You need a reasonably accurate approximation of a definite integral.
*   The function is continuous over the interval of integration.
*   You can easily evaluate the function at discrete points.
*   Simplicity of implementation is desired.

The accuracy of the Trapezoidal Rule generally increases as the number of subintervals ($$n$$) increases. However, it's important to note that this method assumes the function behaves linearly between points, which might not always be the case, leading to approximation errors. More advanced methods like Simpson's Rule can provide better accuracy for the same number of function evaluations by using parabolic approximations.

## Supports

- [[skills/mathematics/integral-evaluation/microskills/trapezoidal-rule-approximation|Trapezoidal rule approximation]]
