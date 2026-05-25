---
type: medium
title: Creating Basic Plots with Matplotlib
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[data-visualization-creation|data-visualization-creation]]"
learning-time-in-minutes: 4
---
# Creating Basic Plots with Matplotlib

This lesson focuses on the practical application of Python and the `matplotlib` library to create fundamental data visualizations. We will learn how to generate simple plots that represent data distributions and relationships.

## Introduction to Matplotlib

`matplotlib` is a powerful and widely-used plotting library for Python. It provides a flexible interface for creating a variety of static, animated, and interactive visualizations in Python. For this skill, we'll concentrate on generating static plots to understand our data.

### Core Concept: The Figure and Axes

When you create a plot with `matplotlib`, you're essentially working with two main components:

*   **Figure:** This is the top-level container for all plot elements. Think of it as the entire window or page where your plot will be drawn.
*   **Axes:** Within a figure, you can have one or more axes. The axes object is where the actual plotting happens – it contains the data points, lines, labels, titles, and ticks.

## Generating a Simple Line Plot

Line plots are excellent for showing trends over time or sequences.

### When to Use a Line Plot

*   To visualize the change of a variable over a continuous range (e.g., temperature over days).
*   To compare trends of multiple variables.

### Steps to Create a Line Plot

1.  **Import `matplotlib.pyplot`:** This is the module that provides a MATLAB-like interface for plotting. Conventionally, it's imported as `plt`.
2.  **Prepare your data:** You'll need two sequences of data: one for the x-axis and one for the y-axis. These are often lists or NumPy arrays.
3.  **Create a figure and axes:** Use `plt.figure()` and `fig.add_subplot()` or the simpler `plt.subplots()`.
4.  **Plot the data:** Use the `plot()` method of the axes object.
5.  **Add labels and a title:** Use `set_xlabel()`, `set_ylabel()`, and `set_title()` on the axes object.
6.  **Display the plot:** Use `plt.show()`.

### Worked Example: Plotting a Simple Trend

Let's plot the sales figures for a product over five days.

```python
import matplotlib.pyplot as plt
import numpy as np

# 1. Prepare your data
days = [1, 2, 3, 4, 5]
sales = [100, 120, 150, 130, 160]

# 2. Create a figure and axes
fig, ax = plt.subplots() # This creates a figure and a single axes

# 3. Plot the data
ax.plot(days, sales)

# 4. Add labels and a title
ax.set_xlabel("Day")
ax.set_ylabel("Sales ($)")
ax.set_title("Daily Sales Trend")

# 5. Display the plot
plt.show()
```

**Explanation:**

*   We import `matplotlib.pyplot` as `plt` and `numpy` as `np` (though `numpy` isn't strictly needed for this basic example, it's common for data handling).
*   `days` represents our x-axis values, and `sales` represents our y-axis values.
*   `plt.subplots()` is a convenient way to get both the figure and axes object at once.
*   `ax.plot(days, sales)` draws the line connecting the data points.
*   `ax.set_xlabel()`, `ax.set_ylabel()`, and `ax.set_title()` add descriptive text to our plot.
*   `plt.show()` renders the plot on your screen.

## Generating a Scatter Plot

Scatter plots are ideal for visualizing the relationship between two numerical variables.

### When to Use a Scatter Plot

*   To observe correlations or patterns between two independent variables.
*   To identify clusters or outliers in data.

### Steps to Create a Scatter Plot

The steps are very similar to creating a line plot, with the main difference being the plotting function used.

1.  **Import `matplotlib.pyplot`:** As before, import as `plt`.
2.  **Prepare your data:** You need two sequences of numerical data.
3.  **Create a figure and axes:** Use `plt.subplots()`.
4.  **Plot the data:** Use the `scatter()` method of the axes object.
5.  **Add labels and a title:** Use `set_xlabel()`, `set_ylabel()`, and `set_title()`.
6.  **Display the plot:** Use `plt.show()`.

### Worked Example: Exploring Relationship Between Two Variables

Let's visualize the relationship between study hours and exam scores.

```python
import matplotlib.pyplot as plt
import numpy as np

# 1. Prepare your data
study_hours = np.array([2, 3, 5, 4, 6, 7, 8, 9, 1, 5])
exam_scores = np.array([65, 70, 85, 75, 80, 90, 95, 100, 55, 78])

# 2. Create a figure and axes
fig, ax = plt.subplots()

# 3. Plot the data using scatter
ax.scatter(study_hours, exam_scores)

# 4. Add labels and a title
ax.set_xlabel("Study Hours")
ax.set_ylabel("Exam Score (%)")
ax.set_title("Study Hours vs. Exam Score")

# 5. Display the plot
plt.show()
```

**Explanation:**

*   We use `np.array()` here to create NumPy arrays for our data, which is common practice for numerical operations.
*   `ax.scatter(study_hours, exam_scores)` plots each pair of `(study_hours, exam_scores)` as a point.
*   Observe the pattern: it appears there's a positive correlation – as study hours increase, exam scores generally tend to increase.

## Customizing Plots (Basic)

`matplotlib` offers extensive customization. Here are a few common ones:

*   **Changing line color and style:**
    *   `ax.plot(x, y, color='red', linestyle='--')`
*   **Changing marker style in scatter plots:**
    *   `ax.scatter(x, y, marker='o', color='blue')` (default is 'o')
*   **Adding a legend:**
    *   For multiple lines: `ax.plot(x1, y1, label='Series A')`, `ax.plot(x2, y2, label='Series B')`, `ax.legend()`

### Worked Example: Customizing a Line Plot

```python
import matplotlib.pyplot as plt
import numpy as np

# Data
years = np.arange(2010, 2021)
revenue_us = np.array([10, 12, 15, 14, 17, 19, 22, 25, 23, 26, 28])
revenue_eu = np.array([5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])

# Create figure and axes
fig, ax = plt.subplots(figsize=(10, 6)) # Control figure size

# Plotting with customizations
ax.plot(years, revenue_us, color='green', linestyle='-', marker='o', label='US Revenue')
ax.plot(years, revenue_eu, color='purple', linestyle='--', marker='x', label='EU Revenue')

# Labels and title
ax.set_xlabel("Year")
ax.set_ylabel("Revenue (Millions $)")
ax.set_title("Company Revenue by Region Over Time")

# Add a legend
ax.legend()

# Improve layout to prevent labels overlapping
plt.tight_layout()

# Display the plot
plt.show()
```

This lesson covered the foundational steps to create line and scatter plots using `matplotlib`. By applying these techniques, you can begin to visualize your data distributions and identify initial relationships.

## Supports

- [[data-visualization-creation|Data Visualization Creation]]
