---
type: "medium"
title: "Implementing Data Cleansing in Python"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/python/microskills/implement-data-cleansing-in-python-code-implementation|Implement Data Cleansing in Python code implementation]]"
---
# Implementing Data Cleansing in Python

This lesson focuses on the practical application of data cleansing techniques using Python code. We will explore how to write and execute Python scripts to handle common data quality issues like missing values and inconsistencies.

## Handling Missing Values

Missing values are a common problem in datasets. Python's `pandas` library provides powerful tools to detect and address them.

### Detecting Missing Values

The `.isnull()` method in pandas returns a boolean DataFrame of the same size, indicating `True` where a value is missing (NaN) and `False` otherwise.

```python
import pandas as pd

data = {'col1': [1, 2, None, 4, 5],
        'col2': ['A', 'B', 'C', None, 'E']}
df = pd.DataFrame(data)

print(df.isnull())
```

This will output:

```
    col1   col2
0  False  False
1  False  False
2   True  False
3  False   True
4  False  False
```

To get a summary of missing values per column, you can use `.sum()` on the result of `.isnull()`:

```python
print(df.isnull().sum())
```

Output:

```
col1    1
col2    1
dtype: int64
```

### Strategies for Handling Missing Values

There are several common strategies to handle missing values:

*   **Imputation:** Replacing missing values with a calculated value.
*   **Dropping:** Removing rows or columns with missing values.

#### Imputation with Mean, Median, or Mode

For numerical data, you can impute missing values using the mean or median of the column. The mode is often used for categorical data.

**Imputing with the Mean:**

```python
# Calculate the mean of 'col1'
mean_col1 = df['col1'].mean()
# Fill missing values in 'col1' with the mean
df['col1'].fillna(mean_col1, inplace=True)

print(df)
```

**Imputing with the Median:**

```python
# Calculate the median of 'col1'
median_col1 = df['col1'].median()
# Fill missing values in 'col1' with the median
df['col1'].fillna(median_col1, inplace=True)

print(df)
```

**Imputing with the Mode (for categorical data):**

```python
# Calculate the mode of 'col2'
mode_col2 = df['col2'].mode()[0] # mode() returns a Series, take the first element
# Fill missing values in 'col2' with the mode
df['col2'].fillna(mode_col2, inplace=True)

print(df)
```

The `inplace=True` argument modifies the DataFrame directly. If you omit it, `fillna()` will return a new DataFrame with the changes.

#### Dropping Rows or Columns

You can remove rows or columns containing missing values using the `.dropna()` method.

**Dropping Rows with Any Missing Values:**

```python
# Create a new DataFrame to avoid modifying the original for this example
data_drop = {'col1': [1, 2, None, 4, 5],
             'col2': ['A', 'B', 'C', None, 'E']}
df_drop = pd.DataFrame(data_drop)

df_dropped_rows = df_drop.dropna()
print(df_dropped_rows)
```

**Dropping Columns with Any Missing Values:**

```python
df_dropped_cols = df_drop.dropna(axis=1)
print(df_dropped_cols)
```

By default, `dropna()` removes rows. Setting `axis=1` tells it to operate on columns. You can also specify `how='all'` to drop only if all values in a row/column are missing, or use `thresh` to set a minimum number of non-NA values required.

## Correcting Inconsistencies

Inconsistencies can manifest as different spellings for the same category, incorrect data types, or unexpected formats.

### Standardizing Text Data

Often, text data has variations in capitalization or spacing.

```python
data_inconsistent = {'category': [' Apple ', 'banana', ' APPLE', 'Orange', 'Banana ']}
df_inconsistent = pd.DataFrame(data_inconsistent)

# Convert to lowercase and remove leading/trailing whitespace
df_inconsistent['category'] = df_inconsistent['category'].str.lower().str.strip()
print(df_inconsistent)
```

Output:

```
  category
0    apple
1   banana
2    apple
3   orange
4   banana
```

The `.str` accessor in pandas allows you to apply string methods to Series.

### Correcting Data Types

Data can sometimes be loaded with incorrect types (e.g., numbers as strings).

```python
data_type_issue = {'price': ['10.50', '20.00', '15.75', 'invalid']}
df_type = pd.DataFrame(data_type_issue)

# Attempt to convert 'price' to numeric, coercing errors to NaN
df_type['price'] = pd.to_numeric(df_type['price'], errors='coerce')
print(df_type)
print(df_type.dtypes)
```

Output:

```
    price
0   10.50
1   20.00
2   15.75
3     NaN
price    object
dtype: object
```

Notice how 'invalid' became `NaN`. You can then handle these `NaN`s using the techniques discussed earlier (imputation or dropping).

## Putting It Together: A Simple Workflow

Here's a basic example demonstrating a combined approach.

```python
# Sample data with missing values and inconsistencies
data_mixed = {
    'ID': [1, 2, 3, 4, 5, 6],
    'Product': ['Laptop', 'Mouse ', 'KEYBOARD', 'Monitor', 'Laptop', 'Mouse'],
    'Rating': [4.5, 3.0, None, 4.0, 4.8, 3.5]
}
df_mixed = pd.DataFrame(data_mixed)

print("Original DataFrame:")
print(df_mixed)
print("\nMissing values before cleansing:")
print(df_mixed.isnull().sum())

# 1. Standardize 'Product' column
df_mixed['Product'] = df_mixed['Product'].str.lower().str.strip()

# 2. Impute missing 'Rating' with the median
median_rating = df_mixed['Rating'].median()
df_mixed['Rating'].fillna(median_rating, inplace=True)

print("\nDataFrame after cleansing:")
print(df_mixed)
print("\nMissing values after cleansing:")
print(df_mixed.isnull().sum())
```

This practical exercise in writing and running Python code allows you to directly apply data cleansing techniques. By mastering these steps, you'll be well-equipped to prepare datasets for further analysis.

## Supports

- [[skills/programming/programming-languages/python/microskills/implement-data-cleansing-in-python-code-implementation|Implement Data Cleansing in Python code implementation]]
