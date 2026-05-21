---
type: "medium"
title: "Calculating Percentage Error"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/data/data-platforms/experimental-data-evaluation/microskills/percentage-error-calculation|percentage-error-calculation]]"
---
# Calculating Percentage Error

Understanding how close your experimental results are to the accepted or theoretical values is crucial in experimental science. Percentage error is a common way to quantify this difference. This lesson will guide you through the calculation and reporting of percentage error.

## Why Calculate Percentage Error?

In any experiment, there's always a possibility of deviation between the values you measure and the true or theoretical values. This deviation can arise from various factors:

*   **Measurement limitations:** The precision of your instruments.
*   **Experimental conditions:** Unforeseen variations in temperature, pressure, etc.
*   **Human error:** In reading instruments or performing manipulations.
*   **Assumptions in theoretical models:** The theoretical value itself might be an approximation.

Percentage error provides a standardized way to express this deviation as a percentage of the theoretical value. This allows for easy comparison of the accuracy of different experiments or different methods used to obtain the same result.

## The Formula

The fundamental formula for calculating percentage error is:

\[
\text{Percentage Error} = \left| \frac{\text{Experimental Value} - \text{Theoretical Value}}{\text{Theoretical Value}} \right| \times 100\%
\]

Let's break down the components:

*   **Experimental Value:** This is the value you obtained from your experiment.
*   **Theoretical Value:** This is the accepted, true, or expected value for the quantity you are measuring. This is often found in textbooks, scientific literature, or can be calculated from known principles.
*   **Absolute Value (|...|):** The vertical bars indicate the absolute value. This means we ignore any negative sign. Percentage error is typically reported as a positive value, as it represents the magnitude of the error, not the direction.
*   **\(100\%\):** We multiply by 100 to express the error as a percentage.

## Steps for Calculation

1.  **Identify the Experimental Value:** This is the result you measured during your lab work.
2.  **Identify the Theoretical Value:** Find the accepted or expected value for the quantity. Ensure it's in the same units as your experimental value.
3.  **Calculate the Difference:** Subtract the theoretical value from the experimental value.
4.  **Take the Absolute Value:** Remove any negative sign from the difference calculated in the previous step.
5.  **Divide by the Theoretical Value:** Divide the absolute difference by the theoretical value.
6.  **Multiply by 100:** Convert the resulting fraction into a percentage.

## Worked Example: Measuring the Acceleration due to Gravity

Imagine you are performing an experiment to measure the acceleration due to gravity, \(g\).

*   **Theoretical Value of \(g\):** The accepted value for the acceleration due to gravity at your location is approximately \(9.81 \, \text{m/s}^2\).
*   **Experimental Value of \(g\):** After conducting your experiment and performing calculations, you find your measured value to be \(9.65 \, \text{m/s}^2\).

Let's calculate the percentage error:

1.  **Experimental Value:** \(9.65 \, \text{m/s}^2\)
2.  **Theoretical Value:** \(9.81 \, \text{m/s}^2\)
3.  **Difference:** \(9.65 \, \text{m/s}^2 - 9.81 \, \text{m/s}^2 = -0.16 \, \text{m/s}^2\)
4.  **Absolute Difference:** \(|-0.16 \, \text{m/s}^2| = 0.16 \, \text{m/s}^2\)
5.  **Divide by Theoretical Value:** \(\frac{0.16 \, \text{m/s}^2}{9.81 \, \text{m/s}^2} \approx 0.0163\)
6.  **Multiply by 100:** \(0.0163 \times 100\% = 1.63\%\)

So, the percentage error in your measurement of the acceleration due to gravity is **1.63%**.

## Reporting Percentage Error

When reporting your results in a lab report, it's common to state your experimental value and then follow it with the percentage error. The units of the experimental and theoretical values must cancel out during the calculation, so the percentage error itself has no units.

**Example Reporting:**

*   "The experimentally determined acceleration due to gravity was \(9.65 \, \text{m/s}^2\), with a percentage error of 1.63%."
*   "Our measured value for the density of substance X was \(1.25 \, \text{g/cm}^3\). The accepted value is \(1.28 \, \text{g/cm}^3\). This represents a percentage error of..." (You would then perform the calculation as shown above).

### Important Considerations for Reporting

*   **Significant Figures:** Ensure your reported percentage error reflects the significant figures of your experimental and theoretical values. If your experimental value has 3 significant figures and your theoretical value has 3 significant figures, your percentage error should also be reported with an appropriate number of significant figures, typically 2 or 3.
*   **Context:** Always include the theoretical value in your report to provide context for the percentage error.

## Common Mistakes to Avoid

*   **Dividing by the Experimental Value:** Always divide by the *theoretical* or *accepted* value.
*   **Forgetting the Absolute Value:** While less common for simple reporting, in some analyses, knowing the direction of the error might be important. However, for general reporting of accuracy, the absolute value is used.
*   **Incorrect Units:** Ensure your experimental and theoretical values are in the same units before calculating the difference.
*   **Misinterpreting the Result:** A small percentage error indicates good agreement between your experimental and theoretical values, meaning your experiment was accurate. A large percentage error suggests a significant discrepancy.

By mastering the calculation of percentage error, you gain a valuable tool for evaluating the reliability and accuracy of your experimental findings.

## Supports

- [[skills/data/data-platforms/experimental-data-evaluation/microskills/percentage-error-calculation|Percentage Error Calculation]]
