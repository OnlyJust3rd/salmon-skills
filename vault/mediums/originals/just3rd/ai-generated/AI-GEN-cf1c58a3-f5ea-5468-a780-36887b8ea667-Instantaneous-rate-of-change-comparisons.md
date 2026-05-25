---
type: "medium"
title: "Comparing Rates of Change with the Mean Value Theorem"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/calculus/calculus-theorems-application/microskills/instantaneous-rate-of-change-comparisons|instantaneous-rate-of-change-comparisons]]"
learning-time-in-minutes: 4
---
# Comparing Rates of Change with the Mean Value Theorem

The Mean Value Theorem (MVT) is a powerful tool in calculus that connects the average rate of change of a function over an interval to its instantaneous rate of change at some point within that interval. This microskill focuses on using the MVT to directly compare these two types of rates of change in practical problems.

### What's the Big Idea?

Imagine you're driving a car. Your average speed over a trip is the total distance traveled divided by the total time. Your instantaneous speed is what your speedometer reads at any given moment. The MVT tells us that if your speed function is "smooth" (technically, continuous on a closed interval and differentiable on its interior), then at some point during your trip, your instantaneous speed *must have been exactly equal* to your average speed for the entire trip.

Mathematically, if a function \(f(x)\) is continuous on \([a, b]\) and differentiable on \((a, b)\), then there exists at least one number \(c\) in \((a, b)\) such that:

\[
f'(c) = \frac{f(b) - f(a)}{b - a}
\]

The left side, \(f'(c)\), is the instantaneous rate of change at point \(c\). The right side is the average rate of change over the interval \([a, b]\).

### Practical Scenario: Speed and Time

Let's say you're tracking the temperature of a chemical reaction. The temperature \(T(t)\) in degrees Celsius is recorded over a period of 4 hours, where \(t\) is time in hours. We have the following data:

*   At \(t=0\) hours, the temperature is \(T(0) = 10^\circ C\).
*   At \(t=4\) hours, the temperature is \(T(4) = 26^\circ C\).

We assume the temperature function \(T(t)\) is continuous and differentiable for \(0 \le t \le 4\).

**Problem:** Did the instantaneous rate of temperature change ever equal the average rate of temperature change over the 4-hour period?

**Solution using MVT:**

1.  **Calculate the average rate of change:**
    The average rate of change of temperature over \([0, 4]\) is:
    \[
    \frac{T(4) - T(0)}{4 - 0} = \frac{26^\circ C - 10^\circ C}{4 \text{ hours}} = \frac{16^\circ C}{4 \text{ hours}} = 4^\circ C/\text{hour}
    \]

2.  **Apply the MVT:**
    The MVT guarantees that there exists at least one time \(c\) in \((0, 4)\) where the instantaneous rate of change \(T'(c)\) is equal to this average rate of change.
    Therefore, \(T'(c) = 4^\circ C/\text{hour}\) for some \(c\) between 0 and 4 hours.

**Conclusion:** Yes, the instantaneous rate of temperature change was exactly \(4^\circ C/\text{hour}\) at some point during the 4-hour period. This tells us that while the temperature might have fluctuated, at least once its rate of increase matched the overall average rate of increase.

### Practice Task

A company's profit \(P(x)\) in thousands of dollars is modeled by the function \(P(x) = -x^3 + 6x^2 + 5x\), where \(x\) is the number of units produced in thousands, for \(0 \le x \le 5\).

1.  Calculate the average rate of change of profit when production increases from 0 thousand units to 5 thousand units.
2.  According to the Mean Value Theorem, does there exist a production level \(c\) (between 0 and 5 thousand units) where the instantaneous rate of change of profit equals this average rate of change?
3.  If the derivative of the profit function is \(P'(x) = -3x^2 + 12x + 5\), find the specific value(s) of \(c\) where the instantaneous rate of change equals the average rate of change.

### Self-Check Questions

1.  What are the two main conditions a function must satisfy for the Mean Value Theorem to apply?
2.  In your own words, what does it mean if the instantaneous rate of change of a function equals its average rate of change over an interval?
3.  If a car's average speed over a 2-hour trip was 50 mph, what does the Mean Value Theorem tell you about the car's speedometer reading during that trip?

## Supports

- [[skills/mathematics/calculus/calculus-theorems-application/microskills/instantaneous-rate-of-change-comparisons|Instantaneous rate of change comparisons]]
