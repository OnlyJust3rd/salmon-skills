---
type: "medium"
title: "Visualization Implementation with Matplotlib"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/data-ai/data-engineering-platforms/data-visualization/microskills/visualization-implementation|visualization-implementation]]"
learning-time-in-minutes: 3
---
# Visualization Implementation with Matplotlib

This lesson focuses on the practical implementation of creating visualizations using Python's `matplotlib` library to address specific data problems. We'll move from understanding data to building charts that reveal insights.

## What is Visualization Implementation?

Visualization implementation is the process of translating data into a visual format that clearly communicates patterns, trends, and outliers. It's about selecting the right chart type and using it effectively to solve a defined problem, such as identifying the best-selling product or understanding customer demographics.

## Practical Example: Analyzing Sales Data

Imagine you work for an e-commerce company and need to identify the top-selling product categories over the last quarter to inform inventory decisions.

**Data Problem:** Determine which product categories generated the most revenue.

**Chosen Visualization:** A bar chart is suitable here because it allows for easy comparison of discrete categories (product categories) based on a quantitative value (revenue).

Let's use `matplotlib` to create this visualization.

```python
import matplotlib.pyplot as plt
import numpy as np

# Sample sales data (replace with your actual data)
categories = ['Electronics', 'Apparel', 'Home Goods', 'Books', 'Toys']
revenue = [150000, 120000, 80000, 50000, 70000]

# Create the bar chart
plt.figure(figsize=(10, 6)) # Adjust figure size for better readability
plt.bar(categories, revenue, color='skyblue')

# Add labels and title
plt.xlabel('Product Category', fontsize=12)
plt.ylabel('Revenue ($)', fontsize=12)
plt.title('Total Revenue by Product Category (Last Quarter)', fontsize=14)

# Rotate x-axis labels if they overlap
plt.xticks(rotation=45, ha='right')

# Add data labels on top of bars
for i, v in enumerate(revenue):
    plt.text(i, v + 2000, f'${v:,}', ha='center', va='bottom', fontsize=10)

# Improve layout and display the plot
plt.tight_layout()
plt.show()
```

**Explanation of the Code:**

1.  **Import Libraries:** We import `matplotlib.pyplot` for plotting and `numpy` (though not strictly necessary for this simple example, it's common in data analysis).
2.  **Sample Data:** We define lists for product categories and their corresponding revenue. In a real scenario, this data would likely come from a database or a CSV file.
3.  **Create Bar Chart:**
    *   `plt.figure(figsize=(10, 6))` creates a figure and axes to draw on, specifying its size.
    *   `plt.bar(categories, revenue, color='skyblue')` generates the bar chart. The first argument is the x-axis data (categories), and the second is the y-axis data (revenue). `color` sets the bar color.
4.  **Labels and Title:** `plt.xlabel()`, `plt.ylabel()`, and `plt.title()` add descriptive text to the axes and the overall plot.
5.  **Rotate X-axis Labels:** `plt.xticks(rotation=45, ha='right')` rotates the category names to prevent overlap if they are long. `ha='right'` aligns the text to the right of the tick mark.
6.  **Add Data Labels:** The `for` loop iterates through the revenue data and uses `plt.text()` to place the exact revenue value above each bar, making it easier to read precise figures. The f-string formatting `f'${v:,}'` adds dollar signs and commas for better readability of large numbers.
7.  **Layout and Display:**
    *   `plt.tight_layout()` automatically adjusts plot parameters for a tight layout.
    *   `plt.show()` displays the generated plot.

## Practice Task

You've been given data showing the number of customer support tickets resolved by each support agent last week.

**Data:**

```python
agents = ['Alice', 'Bob', 'Charlie', 'David', 'Eve']
tickets_resolved = [45, 62, 55, 71, 50]
```

**Task:** Create a horizontal bar chart to visualize this data. Label the x-axis "Tickets Resolved" and the y-axis "Support Agent". Give the chart a title like "Support Tickets Resolved Last Week".

```python
# Your code here
```

## Self-Check Questions

1.  Why would a bar chart be a good choice for comparing the number of tickets resolved by different agents?
2.  What `matplotlib` function is used to create a horizontal bar chart?
3.  How do you add specific data values as text labels above (or next to) the bars in your visualization?

## Supports

- [[skills/computing/data-ai/data-engineering-platforms/data-visualization/microskills/visualization-implementation|Visualization Implementation]]
