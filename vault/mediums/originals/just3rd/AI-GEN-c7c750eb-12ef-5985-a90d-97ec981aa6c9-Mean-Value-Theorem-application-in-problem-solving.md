---
type: "medium"
title: "Mean Value Theorem Application in Problem-Solving"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/calculus/calculus-theorems-application/microskills/mean-value-theorem-application-in-problem-solving|mean-value-theorem-application-in-problem-solving]]"
related-skills:
  - "[[skills/mathematics/calculus/calculus-theorems-application/calculus-theorems-application|calculus-theorems-application]]"
learning-time-in-minutes: 3
---
# Mean Value Theorem Application in Problem-Solving

The Mean Value Theorem (MVT) is a powerful tool that connects the average rate of change of a function over an interval to its instantaneous rate of change at a specific point within that interval. It's particularly useful when you need to relate the overall trend of a function to its behavior at a single moment.

The theorem states that if a function \(f(x)\) is continuous on the closed interval \([a, b]\) and differentiable on the open interval \((a, b)\), then there exists at least one number \(c\) in \((a, b)\) such that:

\[
f'(c) = \frac{f(b) - f(a)}{b - a}
\]

Essentially, this means that the instantaneous rate of change (the derivative, \(f'(c)\)) at some point \(c\) within the interval will be equal to the average rate of change over the entire interval \([a, b]\).

## Practical Example: Analyzing Car Speed

Imagine you're tracking the distance a car travels. You start your stopwatch at \(t=0\) hours and note the distance is 0 miles. One hour later, at \(t=1\) hour, the car has traveled 60 miles.

Let \(d(t)\) represent the distance traveled in miles at time \(t\) in hours. We have \(d(0) = 0\) and \(d(1) = 60\).

1.  **Calculate the average rate of change:**
    The average speed over the interval \([0, 1]\) is:
    \[
    \frac{d(1) - d(0)}{1 - 0} = \frac{60 - 0}{1} = 60 \text{ miles per hour}
    \]

2.  **Apply the MVT:**
    Assuming the distance function \(d(t)\) is continuous and differentiable (meaning the car's speed changes smoothly without sudden jumps), the MVT guarantees that there's at least one point in time \(c\) between 0 and 1 hour where the car's instantaneous speed (its velocity, \(d'(c)\)) was exactly 60 mph.

This tells us that even if the car's speed varied throughout the hour (e.g., speeding up and slowing down), it must have hit exactly 60 mph at some moment.

## Practice Task

A company's profit, in thousands of dollars, is given by the function \(P(t) = -t^3 + 12t^2 + 5\), where \(t\) is the number of months since the company started. The company has been in operation for 4 months, so we are looking at the interval \([0, 4]\).

1.  Calculate the average rate of change of profit from \(t=0\) to \(t=4\).
2.  Find the value(s) of \(c\) in the interval \((0, 4)\) where the instantaneous rate of change of profit equals the average rate of change. Remember, the instantaneous rate of change is the derivative of the profit function, \(P'(t)\).

## Self-Check Questions

*   What are the two main conditions a function must meet for the Mean Value Theorem to apply?
*   If the average rate of change of a function over an interval is positive, what does the MVT tell us about the instantaneous rate of change within that interval?
*   In the car speed example, what would it mean if the MVT did *not* apply?

## Supports

- [[skills/mathematics/calculus/calculus-theorems-application/microskills/mean-value-theorem-application-in-problem-solving|Mean Value Theorem application in problem-solving]]
