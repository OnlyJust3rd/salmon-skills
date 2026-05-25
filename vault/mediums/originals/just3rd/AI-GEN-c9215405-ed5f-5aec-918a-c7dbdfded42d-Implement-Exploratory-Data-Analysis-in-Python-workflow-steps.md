---
type: medium
title: "Implementing Exploratory Data Analysis (EDA) in Python: Workflow Steps"
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[implement-exploratory-data-analysis-in-python-workflow-steps|implement-exploratory-data-analysis-in-python-workflow-steps]]"
related-skills:
  - "[[skills/computing/programming/programming-languages/python/python|python]]"
learning-time-in-minutes: 3
---
# Implementing Exploratory Data Analysis (EDA) in Python: Workflow Steps

Exploratory Data Analysis (EDA) is a crucial first step in any data science project. It involves understanding your data, identifying patterns, spotting anomalies, and testing hypotheses. In Python, this process is streamlined with powerful libraries like Pandas and NumPy. This lesson breaks down the typical workflow of EDA into concrete Python coding steps.

## The EDA Workflow: A Step-by-Step Approach

The EDA process is iterative, meaning you might revisit earlier steps as you uncover new insights. However, a common and effective workflow looks like this:

| Step | Description | Python Libraries | Key Tasks |
|---|---|---|---|
| **1. Data Loading and Initial Inspection** | Get your data into a usable format and take a first look. | Pandas | Read data from various sources (CSV, Excel, SQL), view first/last rows, check data types, get basic info. |
| **2. Data Cleaning** | Address missing values, duplicates, and inconsistent data. | Pandas | Impute missing values, remove duplicates, correct data types, handle outliers. |
| **3. Univariate Analysis** | Analyze individual variables to understand their distributions. | Pandas, Matplotlib, Seaborn | Calculate summary statistics (mean, median, std dev), create histograms, box plots, frequency counts. |
| **4. Bivariate/Multivariate Analysis** | Explore relationships between two or more variables. | Pandas, Matplotlib, Seaborn | Create scatter plots, correlation heatmaps, pair plots, cross-tabulations. |
| **5. Feature Engineering (Optional but Recommended)** | Create new features from existing ones to potentially improve model performance. | Pandas | Combining columns, extracting date components, creating categorical features. |
| **6. Summarizing Findings** | Document key insights and observations from the analysis. | Not code-specific, but notes/reports | Identify trends, relationships, anomalies, and potential data quality issues. |

## Practical Python Implementation of EDA Steps

Let's walk through each step with Python code examples. We'll assume you have a dataset loaded into a Pandas DataFrame named `df`.

### Step 1: Data Loading and Initial Inspection

First, ensure you have the necessary libraries installed:

```bash
pip install pandas matplotlib seaborn
```

Now, let's load a sample CSV file and perform initial checks.

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Assume your data is in 'your_dataset.csv'
try:
    df = pd.read_csv('your_dataset.csv')
except FileNotFoundError:
    print("Error: 'your_dataset.csv' not found. Please provide a valid file path.")
    # Create a dummy DataFrame for demonstration if the file is not found
    data = {
        'ID': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'Age': [25, 30, None, 22, 35, 28, 40, 23, 31, 29],
        'Salary': [50000, 60000, 55000, 48000, 70000, 52000, 75000, 49000, 62000, 58000],
        'Department': ['HR', 'Engineering', 'Sales', 'Marketing', 'Engineering', 'Sales', 'HR', 'Marketing', 'Engineering', 'Sales'],
        'Experience': [2, 5, 3, 1, 7, 4, 10, 1, 6, 3]
    }
    df = pd.DataFrame(data)
    print("Using a dummy DataFrame for demonstration.")


# Display the first 5 rows
print("First 5 rows of the dataset:")
print(df.head())

# Display the last 5 rows
print("\nLast 5 rows of the dataset:")
print(df.tail())

# Get a concise summary of the DataFrame
print("\nDataFrame Info:")
df.info()

# Get descriptive statistics for numerical columns
print("\nDescriptive Statistics:")
print(df.describe())

# Check for missing values
print("\nMissing Values per Column:")
print(df.isnull().sum())
```

### Step 2: Data Cleaning

This step is critical for reliable analysis.

**Handling Missing Values:**

```python
# Option 1: Impute with the mean (for numerical columns)
# df['Age'].fillna(df['Age'].mean(), inplace=True)

# Option 2: Impute with the median (often more robust to outliers)
df['Age'].fillna(df['Age'].median(), inplace=True)
print("\nMissing 'Age' values imputed with median.")

# Option 3: Drop rows with missing values (use with caution)
# df.dropna(inplace=True)

# Verify missing values are handled
print("\nMissing Values after imputation:")
print(df.isnull().sum())
```

**Handling Duplicates:**

```python
# Check for duplicate rows
print(f"\nNumber of duplicate rows: {df.duplicated().sum()}")

# Remove duplicate rows
df.drop_duplicates(inplace=True)
print("Duplicate rows removed.")
```

**Correcting Data Types:**

If `df.info()` shows incorrect data types (e.g., object for dates), you might need to convert them.

```python
# Example: Convert a column to datetime if it's stored as object
# df['DateColumn'] = pd.to_datetime(df['DateColumn'])

# Example: Convert a numerical column that's an object
# df['NumericColumn'] = pd.to_numeric(df['NumericColumn'], errors='coerce') # 'coerce' turns invalid parsing into NaN
```

### Step 3: Univariate Analysis

Understanding each feature in isolation.

**Summary Statistics for Categorical Data:**

```python
print("\nValue Counts for 'Department':")
print(df['Department'].value_counts())
```

**Visualizing Distributions:**

```python
# Histogram for 'Age'
plt.figure(figsize=(8, 5))
sns.histplot(df['Age'], kde=True, bins=10)
plt.title('Distribution of Age')
plt.xlabel('Age')
plt.ylabel('Frequency')
plt.show()

# Box plot for 'Salary'
plt.figure(figsize=(8, 5))
sns.boxplot(y=df['Salary'])
plt.title('Box Plot of Salary')
plt.ylabel('Salary')
plt.show()
```

### Step 4: Bivariate/Multivariate Analysis

Exploring relationships.

**Scatter Plot for Numerical Variables:**

```python
plt.figure(figsize=(10, 6))
sns.scatterplot(x='Age', y='Salary', data=df)
plt.title('Salary vs. Age')
plt.xlabel('Age')
plt.ylabel('Salary')
plt.show()
```

**Correlation Heatmap:**

```python
# Select only numerical columns for correlation
numerical_df = df.select_dtypes(include=np.number)

plt.figure(figsize=(10, 7))
sns.heatmap(numerical_df.corr(), annot=True, cmap='coolwarm', fmt=".2f")
plt.title('Correlation Matrix of Numerical Features')
plt.show()
```

**Pair Plot (for multiple numerical variables):**

This can be computationally intensive for many columns.

```python
# sns.pairplot(df[['Age', 'Salary', 'Experience']]) # Uncomment to run
# plt.suptitle('Pairwise Relationships', y=1.02)
# plt.show()
```

### Step 5: Feature Engineering (Example)

Let's create a new feature: 'Age_Group'.

```python
bins = [0, 25, 35, 45, np.inf]
labels = ['18-25', '26-35', '36-45', '45+']
df['Age_Group'] = pd.cut(df['Age'], bins=bins, labels=labels, right=False)

print("\nDataFrame with 'Age_Group' feature:")
print(df[['Age', 'Age_Group']].head())

print("\nValue counts for 'Age_Group':")
print(df['Age_Group'].value_counts())
```

### Step 6: Summarizing Findings

This is where you document what you've learned. For example:

*   "The average age of employees is X, with a standard deviation of Y."
*   "Salary tends to increase with age and experience, as indicated by the positive correlation in the heatmap."
*   "There appear to be a few potential outliers in the salary distribution above $Z."
*   "The 'Engineering' department has the highest number of employees."

By following these concrete coding steps, you can systematically perform Exploratory Data Analysis in Python, laying a solid foundation for further data modeling and analysis.

## Supports

- [[implement-exploratory-data-analysis-in-python-workflow-steps|Implement Exploratory Data Analysis in Python workflow steps]]
