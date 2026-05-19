---
type: "medium"
title: "Implementing a Data Cleansing Workflow in Python"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/python/microskills/implement-data-cleansing-in-python-workflow-steps|Implement Data Cleansing in Python workflow steps]]"
---
# Implementing a Data Cleansing Workflow in Python

This lesson focuses on applying a structured approach to data cleansing using Python, breaking down the process into actionable coding steps. We'll cover the typical stages involved in preparing raw data for analysis.

## Understanding the Data Cleansing Workflow

Data cleansing is an iterative process. While specific steps might vary depending on the dataset and the problem, a common workflow involves:

1.  **Loading and Inspecting Data:** Getting your data into a usable format and understanding its initial state.
2.  **Handling Missing Values:** Identifying and addressing missing data points.
3.  **Correcting Inconsistencies and Errors:** Dealing with format issues, typos, and incorrect entries.
4.  **Standardizing Data:** Ensuring uniformity in data representation.
5.  **Removing Duplicates:** Identifying and eliminating redundant records.

We'll use the `pandas` library in Python for these operations, as it's the standard for data manipulation.

## Step-by-Step Implementation

Let's walk through each step with Python code examples.

### 1. Loading and Inspecting Data

First, we load our data. For this example, we'll assume we have a CSV file named `sales_data.csv`.

```python
import pandas as pd

# Load the dataset
try:
    df = pd.read_csv('sales_data.csv')
    print("Data loaded successfully.")
except FileNotFoundError:
    print("Error: sales_data.csv not found. Please ensure the file is in the correct directory.")
    # Create a dummy DataFrame for demonstration if the file is not found
    data = {
        'OrderID': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'Product': ['Laptop', 'Mouse', 'Keyboard', 'Laptop', 'Monitor', 'Mouse', 'Keyboard', 'Laptop', 'Monitor', 'Mouse'],
        'Quantity': [1, 2, 1, 1, None, 3, 1, 1, 2, 2],
        'Price': [1200, 25, 75, 1150, 300, 22, 70, 1250, 280, None],
        'Date': ['2023-01-15', '2023-01-15', '2023-01-16', '2023-01-17', '2023-01-17', '2023-01-18', '2023-01-18', '2023-01-19', '2023-01-20', '2023-01-20'],
        'Region': ['North', 'South', 'East', 'North', 'West', 'South', 'East', 'North', 'West', 'South'],
        'Discount': [0.05, 0.0, 0.0, 0.05, 0.1, 0.0, 0.0, 0.05, 0.1, 0.0]
    }
    df = pd.DataFrame(data)
    print("Using a dummy DataFrame for demonstration.")

# Display the first few rows
print("\nFirst 5 rows of the dataset:")
print(df.head())

# Get basic information about the DataFrame
print("\nDataFrame Info:")
df.info()

# Get descriptive statistics for numerical columns
print("\nDescriptive Statistics:")
print(df.describe())
```

This step helps us understand the data types, non-null counts, and the basic distribution of numerical features.

### 2. Handling Missing Values

Missing values can skew analysis. Common strategies include:

*   **Imputation:** Filling missing values with a calculated value (mean, median, mode, or a constant).
*   **Dropping:** Removing rows or columns with missing values (use with caution).

Let's identify missing values:

```python
print("\nMissing values per column:")
print(df.isnull().sum())
```

Now, we'll impute the missing 'Quantity' and 'Price' values. For 'Quantity', the median is often robust to outliers. For 'Price', the median could also be appropriate.

```python
# Impute 'Quantity' with the median
median_quantity = df['Quantity'].median()
df['Quantity'].fillna(median_quantity, inplace=True)
print(f"\nFilled missing 'Quantity' values with median: {median_quantity}")

# Impute 'Price' with the median
median_price = df['Price'].median()
df['Price'].fillna(median_price, inplace=True)
print(f"Filled missing 'Price' values with median: {median_price}")

print("\nMissing values after imputation:")
print(df.isnull().sum())
```

### 3. Correcting Inconsistencies and Errors

This step involves looking for data that doesn't make sense. Examples include:

*   Typographical errors in categorical data (e.g., "Noth" instead of "North").
*   Negative quantities or prices.
*   Invalid date formats.

Let's assume we have a potential typo in the 'Region' column and invalid quantities.

```python
# Correcting typos in 'Region'
# First, find unique values to spot potential issues
print("\nUnique values in 'Region' before correction:", df['Region'].unique())
df['Region'].replace('Noth', 'North', inplace=True)
print("Unique values in 'Region' after correction:", df['Region'].unique())

# Correcting invalid quantities (e.g., negative quantities are not logical)
# Let's assume any quantity <= 0 is an error and set it to the median
print("\nNumber of rows with Quantity <= 0 before correction:", df[df['Quantity'] <= 0].shape[0])
df.loc[df['Quantity'] <= 0, 'Quantity'] = median_quantity # Using the previously calculated median
print("Number of rows with Quantity <= 0 after correction:", df[df['Quantity'] <= 0].shape[0])
```

### 4. Standardizing Data

Ensuring data is in a consistent format. This is crucial for categorical data and dates.

```python
# Standardize 'Product' names (e.g., ensure consistent capitalization)
df['Product'] = df['Product'].str.lower().str.strip()
print("\nUnique 'Product' names after standardization:", df['Product'].unique())

# Convert 'Date' to datetime objects
df['Date'] = pd.to_datetime(df['Date'])
print("\n'Date' column data type after conversion:", df['Date'].dtype)
print("First 5 dates after conversion:", df['Date'].head().tolist())
```

### 5. Removing Duplicates

Duplicate records can inflate counts and skew averages.

```python
print(f"\nNumber of duplicate rows before removal: {df.duplicated().sum()}")
df.drop_duplicates(inplace=True)
print(f"Number of duplicate rows after removal: {df.duplicated().sum()}")
```

## Conclusion

By systematically applying these Python coding steps, you can effectively implement a data cleansing workflow. Each step addresses a common data quality issue, transforming raw data into a reliable format ready for further analysis and modeling. Remember that data cleansing is often an iterative process, and you may need to revisit earlier steps as you uncover more about your data.

## Supports

- [[skills/programming/programming-languages/python/microskills/implement-data-cleansing-in-python-workflow-steps|Implement Data Cleansing in Python workflow steps]]
