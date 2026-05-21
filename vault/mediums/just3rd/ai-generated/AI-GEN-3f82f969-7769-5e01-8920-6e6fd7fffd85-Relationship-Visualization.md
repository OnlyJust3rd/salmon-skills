---
type: "medium"
title: "Visualizing Relationships with Matplotlib"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/python/microskills/relationship-visualization|relationship-visualization]]"
---
# Visualizing Relationships with Matplotlib

This lesson focuses on creating visualizations in Python that effectively show the relationships between different data variables. We'll use the powerful `matplotlib` library to achieve this.

## Why Visualize Relationships?

Understanding how variables interact is crucial for drawing meaningful conclusions from data. Visualizations provide an intuitive way to:

*   **Identify Trends:** See if variables increase or decrease together.
*   **Detect Correlations:** Spot linear or non-linear associations.
*   **Uncover Outliers:** Easily identify data points that deviate significantly.
*   **Communicate Findings:** Present complex relationships clearly to others.

## Scatter Plots: The Foundation for Relationship Visualization

The most common and versatile visualization for showing relationships between two continuous variables is the **scatter plot**. Each point on the plot represents a pair of values for the two variables being examined.

### Core Idea: Mapping Data Points

A scatter plot works by mapping the values of one variable to the horizontal axis (x-axis) and the values of another variable to the vertical axis (y-axis). The position of each dot visually encodes the combined values of these two variables for a single observation.

### Creating a Scatter Plot with Matplotlib

Let's illustrate with an example. Suppose we have data on hours studied and exam scores. We want to see if there's a relationship between how much a student studies and their resulting score.

First, we need to import `matplotlib.pyplot` and `numpy` for generating sample data.

```python
import matplotlib.pyplot as plt
import numpy as np

# Generate sample data
np.random.seed(42) # for reproducibility
hours_studied = np.random.rand(50) * 10 # 50 students, studied between 0-10 hours
exam_scores = 5 * hours_studied + np.random.randn(50) * 5 # Score is roughly proportional to hours, with some noise
```

Now, let's create the scatter plot:

```python
# Create the scatter plot
plt.figure(figsize=(8, 6)) # Set the figure size for better readability
plt.scatter(hours_studied, exam_scores, color='blue', alpha=0.6, label='Student Data')

# Add labels and title
plt.xlabel('Hours Studied')
plt.ylabel('Exam Score')
plt.title('Relationship between Hours Studied and Exam Scores')
plt.grid(True) # Add a grid for easier reading of values
plt.legend() # Show the legend

# Display the plot
plt.show()
```

### How it Works:

1.  **`plt.figure(figsize=(8, 6))`**: Creates a new figure and sets its dimensions. This is good practice for controlling the output size.
2.  **`plt.scatter(hours_studied, exam_scores, color='blue', alpha=0.6, label='Student Data')`**: This is the core plotting function.
    *   The first two arguments are the data for the x and y axes, respectively.
    *   `color='blue'` sets the color of the points.
    *   `alpha=0.6` makes the points slightly transparent, which can be helpful if many points overlap.
    *   `label='Student Data'` assigns a label to this scatter plot, which will be used in the legend.
3.  **`plt.xlabel(...)`, `plt.ylabel(...)`, `plt.title(...)`**: These functions add descriptive labels to the axes and a title to the entire plot, making it understandable.
4.  **`plt.grid(True)`**: Adds a grid to the plot background.
5.  **`plt.legend()`**: Displays the legend, which shows the label assigned in the `plt.scatter` function.
6.  **`plt.show()`**: Renders and displays the generated plot.

### Interpreting the Scatter Plot:

In the example above, we would expect to see points trending upwards from left to right. This would indicate a positive correlation: as hours studied increase, exam scores generally tend to increase. If the points were scattered randomly with no discernible pattern, it would suggest little to no linear relationship between the two variables.

## Beyond Simple Scatter Plots: Adding Dimensions

Scatter plots can be enhanced to represent additional information, such as relationships with a third variable.

### Color and Size for Third Variables

We can use the `c` (color) and `s` (size) arguments in `plt.scatter()` to encode a third variable. For instance, if we had data on student attendance along with hours studied and exam scores, we could color the points based on attendance percentage.

```python
# Add a third variable: attendance percentage
attendance_percentage = np.random.rand(50) * 20 + 80 # Between 80-100%

plt.figure(figsize=(9, 7))
plt.scatter(hours_studied, exam_scores, c=attendance_percentage, cmap='viridis', alpha=0.7, s=50, label='Student Data')

plt.xlabel('Hours Studied')
plt.ylabel('Exam Score')
plt.title('Exam Scores vs. Hours Studied, Colored by Attendance')
plt.colorbar(label='Attendance Percentage') # Add a color bar to show mapping
plt.grid(True)
plt.legend()
plt.show()
```

### How it Works (Added Features):

*   **`c=attendance_percentage`**: This tells `matplotlib` to use the values in `attendance_percentage` to determine the color of each point.
*   **`cmap='viridis'`**: `cmap` stands for colormap. 'viridis' is a perceptually uniform colormap that is often a good choice. You can explore others like 'plasma', 'magma', 'cividis', 'coolwarm', etc.
*   **`s=50`**: Sets a uniform size for all points. You could also pass a list or array of sizes to `s` to vary point sizes based on another variable.
*   **`plt.colorbar(label='Attendance Percentage')`**: This is crucial when using color to represent data. It adds a color bar next to the plot, showing which colors correspond to which values of the third variable.

### Interpretation with Color:

With this enhanced plot, we can now see if there's an interaction between studying, scores, and attendance. For example, we might observe that students who studied more and had higher attendance generally scored higher, and this would be visually evident by the color of the points.

## Common Pitfalls

*   **Overplotting**: When many data points overlap, it becomes hard to discern patterns. Using `alpha` (transparency) or using different plot types like Hexbin plots or 2D Histograms can help.
*   **Misleading Axes**: Always ensure your axes are clearly labeled and start at appropriate values. Don't manipulate them to exaggerate or hide relationships.
*   **Assuming Causation**: A visualization showing a strong relationship does not automatically mean one variable *causes* the other. Correlation does not imply causation.

By mastering scatter plots and their variations, you gain a powerful tool for exploring and communicating the intricate relationships within your data using Python and `matplotlib`.

## Supports

- [[skills/programming/programming-languages/python/microskills/relationship-visualization|Relationship Visualization]]
