---
type: "medium"
title: "Reporting Percentage Error in Lab Reports"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/data-ai/data-engineering-platforms/experimental-data-evaluation/microskills/lab-report-error-reporting|lab-report-error-reporting]]"
learning-time-in-minutes: 4
---
# Reporting Percentage Error in Lab Reports

When conducting experiments, it's rare for measured values to perfectly match theoretical or accepted values. These discrepancies, or errors, are a natural part of the scientific process. In your lab reports, it's crucial to quantify these differences using a standard metric: **percentage error**. This skill focuses on how to accurately compute and report this value, demonstrating your understanding of experimental uncertainty.

## Why Report Percentage Error?

Reporting percentage error allows you to:

*   **Quantify Uncertainty:** It provides a numerical measure of how far your experimental result deviates from the true or expected value.
*   **Compare Results:** It enables you to compare the accuracy of different experiments or different methods within the same experiment.
*   **Assess Experimental Quality:** A lower percentage error generally indicates a more precise and accurate experiment.
*   **Demonstrate Understanding:** It shows that you understand the limitations of experimental measurements and can critically evaluate your findings.

## Calculating Percentage Error

The formula for percentage error is straightforward. It compares the difference between your measured value and the accepted value to the accepted value itself, then expresses this as a percentage.

### The Formula

The formula for percentage error is:

\[
\text{Percentage Error} = \left| \frac{\text{Measured Value} - \text{Accepted Value}}{\text{Accepted Value}} \right| \times 100\%
\]

Let's break down the components:

*   **Measured Value:** This is the value you obtained directly from your experiment.
*   **Accepted Value:** This is the theoretical, true, or standard value for the quantity you are measuring. This might be a known constant, a value from a reliable reference, or a target value.
*   **Absolute Value (`|...|`)**: The absolute value is used because we are interested in the magnitude of the error, not its direction (whether your measurement was too high or too low).
*   **$\times 100\%$**: This converts the fractional difference into a percentage.

### Worked Example: Measuring the Boiling Point of Water

Imagine you conducted an experiment to measure the boiling point of pure water at standard atmospheric pressure.

*   **Accepted Value:** The accepted boiling point of pure water at 1 atm is $100.0^\circ \text{C}$.
*   **Measured Value:** Your experiment yielded a boiling point of $98.5^\circ \text{C}$.

Now, let's apply the formula:

1.  **Find the difference:**
    Measured Value - Accepted Value = $98.5^\circ \text{C} - 100.0^\circ \text{C} = -1.5^\circ \text{C}$

2.  **Take the absolute value of the difference:**
    $|-1.5^\circ \text{C}| = 1.5^\circ \text{C}$

3.  **Divide by the accepted value:**
    $\frac{1.5^\circ \text{C}}{100.0^\circ \text{C}} = 0.015$

4.  **Multiply by 100% to get the percentage error:**
    $0.015 \times 100\% = 1.5\%$

So, the percentage error in your measurement of the boiling point of water is **1.5%**.

## Reporting Percentage Error in Your Lab Report

Simply stating the percentage error isn't enough. It needs to be presented clearly and in context within your lab report.

### Where to Include It

*   **Results Section:** Often, the calculated percentage error is presented alongside the measured value in a table or as part of a descriptive sentence.
*   **Discussion/Conclusion Section:** This is where you interpret the significance of the percentage error. Discuss potential sources of error that might have contributed to this value.

### Best Practices for Reporting

1.  **Be Precise with Units:** Ensure units cancel out correctly in the calculation. The percentage error itself is unitless (or expressed as %).
2.  **Use Appropriate Significant Figures:** The number of significant figures in your percentage error should generally reflect the precision of your measured and accepted values.
3.  **Contextualize:** Always state what the percentage error refers to. For example, "The percentage error in the measured mass was 2.3%."
4.  **Discuss Sources of Error:** In your discussion section, link the magnitude of the percentage error to potential experimental issues. Was it due to instrument limitations, procedural flaws, or environmental factors?
5.  **Consider a Table:** For multiple measurements or multiple experiments, a table is an excellent way to clearly present measured values, accepted values, and their corresponding percentage errors.

#### Example Table Entry:

| Experiment | Measured Value (g) | Accepted Value (g) | Percentage Error (%) |
| :--------- | :----------------- | :----------------- | :------------------- |
| Trial 1    | 10.2               | 10.0               | 2.0                  |
| Trial 2    | 9.8                | 10.0               | 2.0                  |

#### Example Sentence for Discussion:

"The measured acceleration due to gravity was found to be $9.65 \text{ m/s}^2$, resulting in a percentage error of $3.5\%$ when compared to the accepted value of $9.81 \text{ m/s}^2$. This discrepancy may be attributed to air resistance acting on the falling object."

## Common Mistakes to Avoid

*   **Dividing by the Measured Value:** Always divide by the *accepted* or *theoretical* value.
*   **Forgetting the Absolute Value:** A negative percentage error doesn't provide meaningful information about the magnitude of the deviation.
*   **Ignoring Significant Figures:** Reporting an overly precise percentage error when your measurements don't support it reduces credibility.
*   **Not Explaining the Error:** Simply reporting a number without discussing its implications or potential causes misses a key aspect of experimental analysis.

By mastering the calculation and clear reporting of percentage error, you will significantly enhance the quality and interpretability of your lab reports, demonstrating a strong grasp of experimental data evaluation.

## Supports

- [[skills/computing/data-ai/data-engineering-platforms/experimental-data-evaluation/microskills/lab-report-error-reporting|Lab Report Error Reporting]]
