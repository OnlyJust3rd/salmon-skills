---
type: "medium"
title: "Mathematical Analysis of Test Data"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/software-engineering/software-practices/iterative-prototyping-and-testing/microskills/mathematical-analysis-of-test-data|mathematical-analysis-of-test-data]]"
learning-time-in-minutes: 5
---
# Mathematical Analysis of Test Data

In the process of iterative prototyping and testing, analyzing the data generated from your tests is crucial. This microskill focuses on using mathematical principles to interpret performance metrics and understand how your prototype is performing against its requirements. This analysis directly informs the next iteration of your design.

## Core Idea: From Numbers to Insights

After you've run tests on your prototype (e.g., measuring response times, power consumption, accuracy, or signal strength), you'll have a collection of numerical data. Mathematical analysis helps you transform these raw numbers into meaningful insights. This isn't about complex calculus for basic analysis, but rather about using fundamental math to:

*   **Quantify performance:** How well is the prototype meeting specific numerical targets?
*   **Identify trends:** Are there patterns in the data that indicate a problem or a success?
*   **Compare variations:** How does one version of the prototype perform against another, or against a baseline?
*   **Detect anomalies:** Are there data points that are significantly different from the rest?

## Key Mathematical Concepts and Tools

For applying mathematical principles to analyze performance metrics in computer engineering, several concepts are fundamental:

### 1. Descriptive Statistics

These are tools to summarize and describe the main features of a dataset.

*   **Mean (Average):** The sum of all values divided by the number of values. It gives a central tendency of the data.
    $$ \text{Mean} = \frac{\sum_{i=1}^{n} x_i}{n} $$
    *Example:* If you measure the response time of a function 10 times and get values `[120ms, 115ms, 125ms, 118ms, 122ms, 119ms, 121ms, 117ms, 123ms, 120ms]`, the mean response time is:
    $$ \text{Mean} = \frac{120+115+125+118+122+119+121+117+123+120}{10} = \frac{1190}{10} = 119 \text{ ms} $$

*   **Median:** The middle value in a dataset that has been ordered from least to greatest. It's less sensitive to outliers than the mean.
    *Example:* For the same response times above, ordered: `[115, 117, 118, 119, 120, 120, 121, 122, 123, 125]`. Since there are 10 values (an even number), the median is the average of the 5th and 6th values:
    $$ \text{Median} = \frac{120 + 120}{2} = 120 \text{ ms} $$

*   **Standard Deviation:** A measure of the amount of variation or dispersion of a set of values. A low standard deviation indicates that the values tend to be close to the mean, while a high standard deviation indicates that the values are spread out over a wider range.
    $$ \sigma = \sqrt{\frac{\sum_{i=1}^{n} (x_i - \mu)^2}{N}} $$
    (For a sample, you'd use $n-1$ in the denominator).
    *Interpretation:* A high standard deviation in response times might suggest inconsistent performance, which could be a problem.

### 2. Identifying Performance Gaps

Compare your measured performance against the specified requirements.

*   **Requirement:** The prototype must have a mean response time of less than 100 ms.
*   **Analysis:** Your measured mean response time is 119 ms.
*   **Conclusion:** There is a performance gap. The prototype is currently not meeting this requirement. You need to investigate why and make improvements.

### 3. Trend Analysis

Look for how performance changes over time or with different inputs.

*   **Scenario:** You test your prototype's power consumption as the workload increases.
*   **Data:** You record power draw at different load levels.
*   **Analysis:** Plotting power consumption against workload might reveal a linear trend, an exponential increase, or a plateau.
    *   A linear increase ($P = m \cdot W + c$) indicates power scales proportionally with work.
    *   An exponential increase ($P = a \cdot e^{kW}$) suggests efficiency drops significantly at higher loads.
*   **Insight:** This helps you understand the operating limits and efficiency characteristics of your prototype.

## Worked Example: Analyzing Sensor Accuracy

Imagine you've built a prototype device with a temperature sensor. You've tested its accuracy by placing it next to a calibrated reference thermometer and recording readings.

**Test Data (Prototype vs. Reference in °C):**

| Reading # | Prototype (°C) | Reference (°C) | Difference (°C) |
| :-------- | :------------- | :------------- | :-------------- |
| 1         | 22.1           | 22.0           | 0.1             |
| 2         | 21.9           | 22.1           | -0.2            |
| 3         | 22.3           | 22.2           | 0.1             |
| 4         | 22.0           | 22.0           | 0.0             |
| 5         | 22.5           | 22.3           | 0.2             |
| 6         | 21.8           | 22.0           | -0.2            |
| 7         | 22.2           | 22.1           | 0.1             |
| 8         | 21.9           | 21.9           | 0.0             |
| 9         | 22.4           | 22.2           | 0.2             |
| 10        | 22.0           | 22.0           | 0.0             |

**Requirement:** The prototype's temperature readings should have an average difference of no more than $±0.15$ °C compared to the reference thermometer.

**Mathematical Analysis:**

1.  **Calculate the Difference:** A "Difference" column is added to show `Prototype - Reference`.
2.  **Calculate the Mean Difference:**
    $$ \text{Mean Difference} = \frac{0.1 - 0.2 + 0.1 + 0.0 + 0.2 - 0.2 + 0.1 + 0.0 + 0.2 + 0.0}{10} = \frac{0.3}{10} = 0.03 \text{ °C} $$
    The average reading from the prototype is 0.03 °C higher than the reference. This value is well within the $±0.15$ °C allowance.

3.  **Calculate the Standard Deviation of the Differences:**
    First, calculate the variance:
    $$ \text{Variance} = \frac{\sum (x_i - \bar{x})^2}{n-1} $$
    Where $x_i$ are the differences and $\bar{x}$ is the mean difference (0.03).
    Let's calculate for a few points:
    *   $(0.1 - 0.03)^2 = (0.07)^2 = 0.0049$
    *   $(-0.2 - 0.03)^2 = (-0.23)^2 = 0.0529$
    *   ... and so on for all 10 points.
    Summing all squared differences and dividing by 9 (for sample standard deviation) will give the variance.
    Let's assume the calculated variance is approximately $0.016$.
    $$ \text{Standard Deviation} = \sqrt{\text{Variance}} = \sqrt{0.016} \approx 0.126 \text{ °C} $$

**Interpretation:**

*   The **mean difference** of $0.03$ °C indicates that, on average, the prototype is quite accurate.
*   The **standard deviation** of $0.126$ °C shows the typical spread of errors. Since this is less than the requirement of $0.15$ °C, it suggests that most individual readings are likely to be within an acceptable error margin from the reference.

**Conclusion for this Iteration:**

Based on this mathematical analysis, the prototype's temperature sensor meets the accuracy requirement. You can proceed to test other aspects or move to the next iteration with confidence in this component's performance. If the standard deviation had been high, or the mean difference outside the target, you would need to investigate potential causes like sensor calibration, environmental factors, or electrical noise.

## Supports

- [[skills/computing/software-engineering/software-practices/iterative-prototyping-and-testing/microskills/mathematical-analysis-of-test-data|Mathematical Analysis of Test Data]]
