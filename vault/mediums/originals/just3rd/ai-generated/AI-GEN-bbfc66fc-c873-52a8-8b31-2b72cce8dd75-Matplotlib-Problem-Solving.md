---
type: "medium"
title: "Matplotlib Problem Solving: Visualizing Trends to Find Anomalies"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/data-ai/data-engineering-platforms/data-visualization/microskills/matplotlib-problem-solving|matplotlib-problem-solving]]"
related-skills:
  - "[[skills/computing/data-ai/data-engineering-platforms/data-visualization/data-visualization|data-visualization]]"
learning-time-in-minutes: 3
---
# Matplotlib Problem Solving: Visualizing Trends to Find Anomalies

This lesson focuses on using Matplotlib in Python to create visualizations that help identify unusual patterns or "anomalies" within your data, a key aspect of problem-solving. We'll apply Matplotlib functions to solve a common data problem: detecting outliers.

## The Problem: Identifying Unusual Sales Spikes

Imagine you're analyzing monthly sales data for a retail store. Most months show consistent sales, but occasionally, there are unusually high or low spikes. These anomalies might indicate a successful marketing campaign, a system error, or a significant external event. Visualizing this data can quickly highlight these unusual points.

## Applying Matplotlib to Find Anomalies

We'll use a scatter plot to visualize the monthly sales data. The x-axis will represent the month, and the y-axis will represent the sales amount. Points that fall significantly far from the general trend can be considered anomalies.

Let's consider a scenario where we have sales data over 12 months.

```python
import matplotlib.pyplot as plt
import numpy as np

# Sample monthly sales data
months = np.arange(1, 13)
sales = np.array([1200, 1350, 1400, 1300, 1500, 1600, 1550, 1450, 3500, 1300, 1400, 1350]) # Note the anomaly in month 9

# Create the scatter plot
plt.figure(figsize=(10, 6)) # Set the figure size for better readability
plt.scatter(months, sales, color='blue', marker='o', s=100) # Create scatter plot with circle markers

# Add titles and labels
plt.title('Monthly Sales Data with Potential Anomalies')
plt.xlabel('Month')
plt.ylabel('Sales Amount ($)')
plt.xticks(months) # Ensure all months are shown on the x-axis

# Highlight the potential anomaly (optional but helpful)
anomaly_month = 9
anomaly_sales = sales[anomaly_month - 1]
plt.scatter(anomaly_month, anomaly_sales, color='red', marker='X', s=200, label='Potential Anomaly') # Highlight with a different marker and color

plt.legend() # Show the legend
plt.grid(True) # Add a grid for easier reading
plt.show()
```

In this code:
*   We define `months` and `sales` arrays. Notice the unusually high value in `sales` for month 9.
*   `plt.scatter()` is used to plot each month's sales as a point.
*   We add a title, axis labels, and ensure all months are visible on the x-axis using `plt.xticks()`.
*   Crucially, we *highlight* the point that appears to be an anomaly (month 9) with a distinct marker ('X') and color ('red') and add a label to it, making it visually obvious.
*   `plt.legend()` displays the label for the highlighted point.
*   `plt.grid(True)` adds grid lines to make it easier to compare values.

The resulting plot clearly shows the general trend of sales, with the sales for month 9 standing out significantly from the rest. This visual cue prompts further investigation into *why* that month's sales were so different.

## Practice Task

Create a line plot showing the temperature variation over a week. Assume you have daily temperature readings and one day has an exceptionally high temperature, indicating a potential heatwave event.

Use `matplotlib.pyplot.plot()` to create the line graph. Label your axes and give your plot a descriptive title. Add a marker to the day with the exceptionally high temperature and include a legend explaining what that marker signifies.

**Sample Data:**
`days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']`
`temperatures = [22, 24, 23, 25, 26, 38, 27]` (Note the high temperature on Saturday)

## Self-Check Questions

1.  What Matplotlib function did we primarily use to visualize the monthly sales data?
2.  How does the scatter plot help in identifying anomalies in the sales data?
3.  What did you add to the plot to make the potential anomaly stand out more clearly?
4.  When creating your line plot for temperature, what function would you use, and what parameters would you adjust to make the unusual temperature day visually distinct?

## Supports

- [[skills/computing/data-ai/data-engineering-platforms/data-visualization/microskills/matplotlib-problem-solving|Matplotlib Problem Solving]]
