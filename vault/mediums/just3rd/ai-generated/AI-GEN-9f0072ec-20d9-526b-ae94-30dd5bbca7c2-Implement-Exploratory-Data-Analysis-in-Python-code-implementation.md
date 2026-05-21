---
type: "medium"
title: "Implementing Exploratory Data Analysis in Python"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/python/microskills/implement-exploratory-data-analysis-in-python-code-implementation|implement-exploratory-data-analysis-in-python-code-implementation]]"
---
# Implementing Exploratory Data Analysis in Python

This lesson focuses on writing and running Python code to perform exploratory data analysis (EDA). We'll use common Python libraries to get a feel for your data, identify patterns, and spot potential issues.

## The Goal of EDA in Code

When we're working with data in Python, EDA is our first step to understand what we're dealing with. It's not about making final conclusions, but about asking questions of the data through code. We want to achieve a quick understanding by:

*   **Summarizing Data:** Getting a sense of the central tendencies, spread, and distribution of our variables.
*   **Identifying Patterns:** Looking for relationships between variables.
*   **Detecting Anomalies:** Finding outliers or unusual data points.
*   **Checking Data Quality:** Spotting missing values or inconsistent formats.

## Essential Libraries for EDA

For this, we'll rely heavily on two core Python libraries:

*   **NumPy:** For numerical operations and array manipulation.
*   **Pandas:** For data manipulation and analysis, especially with its DataFrame structure.

Let's start by importing them.

```python
import pandas as pd
import numpy as np
```

## Loading and Inspecting Your Data

The first action in EDA is to get your data into a format that Python can work with. Pandas DataFrames are perfect for this. We'll assume you have a CSV file named `sales_data.csv` for demonstration.

```python
# Load the dataset
try:
    df = pd.read_csv('sales_data.csv')
    print("Dataset loaded successfully.")
except FileNotFoundError:
    print("Error: sales_data.csv not found. Please ensure the file is in the correct directory.")
    # Create a dummy DataFrame if the file is not found, for demonstration purposes
    data = {
        'OrderID': [101, 102, 103, 104, 105, 106, 107, 108, 109, 110],
        'ProductID': ['A', 'B', 'A', 'C', 'B', 'A', 'C', 'B', 'A', 'C'],
        'Quantity': [2, 1, 3, 2, 1, 4, 1, 2, 3, 1],
        'Price': [10.5, 25.0, 10.5, 15.0, 25.0, 10.5, 15.0, 25.0, 10.5, 15.0],
        'SaleDate': ['2023-01-15', '2023-01-16', '2023-01-17', '2023-01-18', '2023-01-19', '2023-01-20', '2023-01-21', '2023-01-22', '2023-01-23', '2023-01-24'],
        'CustomerID': [10, 11, 10, 12, 11, 10, 12, 11, 10, 12],
        'Region': ['North', 'South', 'North', 'East', 'South', 'North', 'East', 'South', 'North', 'East']
    }
    df = pd.DataFrame(data)
    print("Using a dummy dataset for demonstration.")

```

Once loaded, you'll want to get a quick overview of the data.

```python
# Display the first 5 rows
print("\nFirst 5 rows:")
print(df.head())

# Display the last 5 rows
print("\nLast 5 rows:")
print(df.tail())

# Get basic information about the DataFrame (columns, data types, non-null counts)
print("\nDataFrame Info:")
df.info()

# Get the dimensions of the DataFrame (rows, columns)
print("\nDataFrame Shape:")
print(df.shape)
```

## Calculating Summary Statistics

Summary statistics give us a quantitative overview of the data. Pandas makes this very easy.

### For Numerical Columns

The `.describe()` method is incredibly useful for numerical columns.

```python
# Summary statistics for numerical columns
print("\nSummary Statistics (Numerical Columns):")
print(df.describe())
```

This will output:
*   `count`: The number of non-null values.
*   `mean`: The average value.
*   `std`: The standard deviation, measuring the dispersion of data.
*   `min`: The minimum value.
*   `25%`: The first quartile (25th percentile).
*   `50%`: The median (50th percentile).
*   `75%`: The third quartile (75th percentile).
*   `max`: The maximum value.

### For Categorical Columns

For non-numerical (categorical) columns, `.describe(include='object')` or `.describe(include='category')` is useful.

```python
# Summary statistics for categorical columns
print("\nSummary Statistics (Categorical Columns):")
print(df.describe(include='object'))
```

This will show:
*   `count`: The number of non-null values.
*   `unique`: The number of distinct values.
*   `top`: The most frequent value.
*   `freq`: The frequency of the `top` value.

## Handling Missing Data

Missing data can skew your analysis. Identifying and understanding missing data is a key EDA step.

```python
# Check for missing values in each column
print("\nMissing Values Per Column:")
print(df.isnull().sum())

# Calculate the percentage of missing values per column
print("\nPercentage of Missing Values Per Column:")
print((df.isnull().sum() / len(df)) * 100)
```

If you find missing values, you'll need to decide how to handle them (e.g., imputation, removal). For now, we're just identifying them.

## Exploring Unique Values and Value Counts

Understanding the unique values within a column, especially for categorical data, is important for data quality and insight.

```python
# Get the number of unique values in each column
print("\nNumber of Unique Values Per Column:")
print(df.nunique())

# Get the frequency of each unique value in a specific column (e.g., 'Region')
print("\nValue Counts for 'Region':")
print(df['Region'].value_counts())

# Get the frequency of each unique value in another column (e.g., 'ProductID')
print("\nValue Counts for 'ProductID':")
print(df['ProductID'].value_counts())
```

## Basic Data Visualization (In-Code Preview)

While full visualization often involves libraries like Matplotlib and Seaborn, Pandas itself offers some basic plotting capabilities directly from DataFrames.

```python
# Histogram for a numerical column (e.g., 'Price')
print("\nHistogram for 'Price':")
df['Price'].hist()
# In a real environment, you'd typically use plt.show() after this
# import matplotlib.pyplot as plt
# plt.show()

# Countplot for a categorical column (e.g., 'Region') - requires value_counts first
print("\nBar Plot for 'Region':")
df['Region'].value_counts().plot(kind='bar')
# plt.show()
```
*Note: To actually display these plots when running this code, you would need to import `matplotlib.pyplot as plt` and call `plt.show()` after each plotting command.*

## Next Steps in EDA

This lesson covered the foundational code implementations for EDA. The next steps in a real-world scenario would involve:

*   **Deeper Statistical Analysis:** Calculating correlations between numerical variables.
*   **Advanced Visualizations:** Creating scatter plots, box plots, and heatmaps to uncover complex relationships and distributions.
*   **Data Transformation:** Creating new features, handling outliers more robustly, and converting data types as needed.
*   **Hypothesis Generation:** Forming initial ideas about the data based on your findings.

## Supports

- [[skills/programming/programming-languages/python/microskills/implement-exploratory-data-analysis-in-python-code-implementation|Implement Exploratory Data Analysis in Python code implementation]]
