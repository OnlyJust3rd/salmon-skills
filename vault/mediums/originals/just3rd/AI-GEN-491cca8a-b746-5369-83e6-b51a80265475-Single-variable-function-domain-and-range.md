---
type: "medium"
title: "Understanding the Domain and Range of Single-Variable Functions"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/calculus/function-analysis/microskills/single-variable-function-domain-and-range|single-variable-function-domain-and-range]]"
related-skills:
  - "[[skills/mathematics/calculus/function-analysis/function-analysis|function-analysis]]"
learning-time-in-minutes: 5
---
# Understanding the Domain and Range of Single-Variable Functions

In the world of function analysis, understanding the **domain** and **range** of a function is fundamental. These two concepts tell us about the possible input values and the resulting output values of a function, respectively. Grasping this is crucial for analyzing how functions behave and what their limitations are.

## What is the Domain of a Function?

The **domain** of a function is the set of all possible input values for which the function is defined. In simpler terms, it's all the 'x' values you can "plug into" a function and get a valid output.

Think of a function as a machine. The domain is the collection of all items the machine can accept. If you try to put something in that the machine isn't designed for, it won't work.

### Common Restrictions on the Domain:

1.  **Division by Zero:** You cannot divide by zero. Therefore, any function with a variable in the denominator will have restrictions on its domain. The denominator cannot be equal to zero.
    *   Example: For the function \(f(x) = \frac{1}{x-2}\), the denominator \(x-2\) cannot be zero. So, \(x \neq 2\). The domain is all real numbers except 2.

2.  **Even Roots of Negative Numbers:** You cannot take the square root (or any even root, like fourth root, sixth root, etc.) of a negative number and get a real number result. So, any expression under an even radical must be non-negative (greater than or equal to zero).
    *   Example: For the function \(g(x) = \sqrt{x+3}\), the expression under the square root, \(x+3\), must be greater than or equal to zero. So, \(x+3 \ge 0\), which means \(x \ge -3\). The domain is all real numbers greater than or equal to -3.

3.  **Logarithms of Non-Positive Numbers:** The argument of a logarithm must be strictly positive (greater than zero).
    *   Example: For the function \(h(x) = \log(x-1)\), the argument \(x-1\) must be greater than zero. So, \(x-1 > 0\), which means \(x > 1\). The domain is all real numbers greater than 1.

### Notation for Domain:

*   **Set-builder notation:** \{x | x is a real number and \(x \neq 2\)\}
*   **Interval notation:** \((-\infty, 2) \cup (2, \infty)\)

## What is the Range of a Function?

The **range** of a function is the set of all possible output values that the function can produce. It's all the 'y' values that result from plugging in every valid 'x' value from the domain.

Using our machine analogy, the range is the collection of all items the machine can produce.

### Finding the Range:

Finding the range can sometimes be trickier than finding the domain. Here are some common scenarios:

1.  **Linear Functions (without vertical asymptotes):** For a linear function like \(f(x) = mx + b\) (where \(m \neq 0\)), the range is typically all real numbers, as it can produce any real number output.

2.  **Quadratic Functions:** The range of a quadratic function depends on whether it opens upwards or downwards.
    *   Example: For \(f(x) = x^2\), the smallest possible output is 0 (when \(x=0\)). Since the parabola opens upwards, it can produce any non-negative value. The range is \([0, \infty)\).
    *   Example: For \(g(x) = -x^2 + 4\), the highest possible output is 4 (when \(x=0\)). Since the parabola opens downwards, it can produce any value less than or equal to 4. The range is \((-\infty, 4]\).

3.  **Functions with Horizontal Asymptotes:** Horizontal asymptotes can indicate a limit to the function's output values.
    *   Example: For \(f(x) = \frac{1}{x}\), as \(x\) approaches infinity or negative infinity, \(f(x)\) approaches 0, but never reaches it. The range is \((-\infty, 0) \cup (0, \infty)\).

4.  **Functions with Restricted Domains:** If the domain is restricted, the range will be restricted accordingly.

### Notation for Range:

Similar to the domain, we use set-builder or interval notation.

*   **Set-builder notation:** \{y | y is a real number and \(y \ge 0\)\}
*   **Interval notation:** \([0, \infty)\)

## Worked Example: Analyzing Domain and Range

Let's analyze the function: \(f(x) = \sqrt{9 - x^2}\)

**1. Domain Analysis:**

*   The function involves a square root, so the expression inside the radical must be non-negative.
*   Condition: \(9 - x^2 \ge 0\)
*   To solve this inequality:
    *   Add \(x^2\) to both sides: \(9 \ge x^2\)
    *   This means \(x^2 \le 9\).
    *   Taking the square root of both sides (and remembering both positive and negative roots): \(-3 \le x \le 3\).
*   Therefore, the domain is all real numbers between -3 and 3, inclusive.
*   **Domain in interval notation:** \([-3, 3]\)

**2. Range Analysis:**

*   We know that for \(f(x) = \sqrt{u}\), the output of the square root is always non-negative, so \(f(x) \ge 0\).
*   We need to find the maximum possible value of \(f(x)\) within its domain \([-3, 3]\).
*   The expression \(9 - x^2\) will be largest when \(x^2\) is smallest. The smallest \(x^2\) can be in the domain \([-3, 3]\) is 0 (when \(x=0\)).
*   When \(x=0\), \(f(0) = \sqrt{9 - 0^2} = \sqrt{9} = 3\).
*   The smallest value of \(9 - x^2\) occurs at the boundaries of the domain (\(x=-3\) or \(x=3\)).
    *   When \(x=3\), \(f(3) = \sqrt{9 - 3^2} = \sqrt{9 - 9} = \sqrt{0} = 0\).
    *   When \(x=-3\), \(f(-3) = \sqrt{9 - (-3)^2} = \sqrt{9 - 9} = \sqrt{0} = 0\).
*   So, the function's output values range from 0 to 3.
*   **Range in interval notation:** \([0, 3]\)

## Key Takeaways

*   The **domain** is the set of valid inputs. Always check for division by zero, even roots of negative numbers, and arguments of logarithms.
*   The **range** is the set of possible outputs. Consider the function's behavior, its minimum/maximum values, and any asymptotes.
*   Understanding domain and range is a crucial first step in analyzing any single-variable function.

## Supports

- [[skills/mathematics/calculus/function-analysis/microskills/single-variable-function-domain-and-range|Single-variable function domain and range]]
