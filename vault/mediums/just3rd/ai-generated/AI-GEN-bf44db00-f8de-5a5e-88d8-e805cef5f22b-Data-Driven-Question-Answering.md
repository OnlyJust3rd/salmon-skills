---
type: "medium"
title: "Data-Driven Question Answering with Matplotlib"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/data/data-platforms/data-visualization/microskills/data-driven-question-answering|Data-Driven Question Answering]]"
---
# Data-Driven Question Answering with Matplotlib

This lesson focuses on using Python's `matplotlib` library to create visualizations that directly answer specific questions about your data. By constructing targeted plots, you can uncover insights and communicate findings effectively.

## What is Data-Driven Question Answering?

Data-driven question answering involves formulating a question about your dataset and then using data visualization to find the answer. This is an iterative process: you might start with a broad question, create a visualization, and then refine your question based on what you see. The goal is to move beyond simply displaying data to actively querying it through visual representation.

## Practical Example: Analyzing Sales Data

Imagine you have a dataset of sales transactions, and your business question is: "Which product category generated the most revenue last quarter?"

To answer this, you'll need to:
1.  **Load your data:** Assume your data is in a Pandas DataFrame.
2.  **Aggregate revenue by category:** Sum the revenue for each product category.
3.  **Visualize the results:** Use a bar chart to compare revenues across categories.

Let's walk through the Python code using `matplotlib` and `pandas`.

```python
import pandas as pd
import matplotlib.pyplot as plt

# Sample sales data (replace with your actual data loading)
data = {
    'product_category': ['Electronics', 'Clothing', 'Home Goods', 'Electronics', 'Clothing', 'Home Goods', 'Electronics', 'Clothing'],
    'revenue': [1200, 500, 800, 1500, 600, 950, 1100, 750]
}
df = pd.DataFrame(data)

# Calculate total revenue per product category
revenue_by_category = df.groupby('product_category')['revenue'].sum().sort_values(ascending=False)

# --- Constructing the Visualization to Answer the Question ---

plt.figure(figsize=(10, 6)) # Set the figure size for better readability
plt.bar(revenue_by_category.index, revenue_by_category.values, color=['skyblue', 'lightcoral', 'lightgreen'])

# Adding labels and title to make the visualization self-explanatory
plt.xlabel("Product Category")
plt.ylabel("Total Revenue ($)")
plt.title("Total Revenue by Product Category (Last Quarter)")
plt.xticks(rotation=45, ha='right') # Rotate x-axis labels for better fit
plt.tight_layout() # Adjust layout to prevent labels overlapping

# Display the plot
plt.show()
```

In this example, the bar chart directly answers our question. By looking at the heights of the bars, we can immediately see which category generated the most revenue. The labels and title ensure the visualization is clear and interpretable without needing additional context.

## Practice Task

Consider a dataset containing information about student test scores, including `subject` and `score`.

Your question is: **"What is the average score for each subject?"**

Write Python code using `pandas` and `matplotlib` to:
1.  Load (or create a sample DataFrame for) this data.
2.  Calculate the average score for each subject.
3.  Create a bar chart to visualize these average scores, clearly labeling the axes and providing a title.

## Self-Check Questions

1.  When creating a visualization to answer a specific question, why is it important to label your axes and title your plot?
2.  What type of chart is generally most suitable for comparing discrete categories, like product categories or subjects, based on a numerical value?
3.  If your initial visualization doesn't clearly answer your question, what should be your next step?

## Supports

- [[skills/data/data-platforms/data-visualization/microskills/data-driven-question-answering|Data-Driven Question Answering]]
