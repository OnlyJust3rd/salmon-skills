---
type: medium
title: "Implementing the Data Science Workflow in Python: Step-by-Step"
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[implement-data-science-workflow-in-python-workflow-steps|implement-data-science-workflow-in-python-workflow-steps]]"
related-skills:
  - "[[skills/computing/programming/programming-languages/python/python|python]]"
learning-time-in-minutes: 5
---
# Implementing the Data Science Workflow in Python: Step-by-Step

This lesson focuses on the practical, code-driven steps involved in executing a typical data science workflow using Python. We'll break down the process into distinct coding stages.

## The Core Workflow Stages

A data science project typically follows these key stages:

1.  **Data Acquisition:** Getting the data into your environment.
2.  **Data Cleaning & Preprocessing:** Making the data usable and consistent.
3.  **Exploratory Data Analysis (EDA):** Understanding patterns and characteristics of the data.
4.  **Feature Engineering:** Creating new, informative features from existing ones.
5.  **Model Building & Training:** Developing and training predictive or analytical models.
6.  **Model Evaluation:** Assessing the performance of the trained model.
7.  **Deployment (Out of scope for this lesson):** Making the model available for use.

We will focus on implementing steps 1 through 6 using Python libraries.

## Stage 1: Data Acquisition

The first step is to load your data. Common sources include CSV files, databases, or APIs. For this lesson, we'll assume data is in a CSV file.

### Using Pandas for Data Loading

The `pandas` library is the de facto standard for data manipulation in Python.

**When to use:** When your data is stored in tabular formats like CSV, Excel, SQL databases, or can be fetched from APIs.

**Steps:**

1.  **Import the pandas library.**
2.  **Use the appropriate pandas read function** (e.g., `read_csv`, `read_excel`, `read_sql`).

**Code Example:**

```python
import pandas as pd

# Load data from a CSV file
try:
    df = pd.read_csv('your_dataset.csv')
    print("Data loaded successfully!")
    print(df.head()) # Display the first 5 rows
except FileNotFoundError:
    print("Error: 'your_dataset.csv' not found. Please ensure the file is in the correct directory.")
except Exception as e:
    print(f"An error occurred during data loading: {e}")
```

**How it works:** `pd.read_csv()` parses the CSV file and returns a `DataFrame` object, which is a 2-dimensional labeled data structure with columns of potentially different types. The `.head()` method is useful for quickly inspecting the first few rows.

## Stage 2: Data Cleaning & Preprocessing

Raw data is rarely perfect. This stage involves handling missing values, correcting data types, and removing duplicates.

### Handling Missing Values

Missing data can skew results. Pandas offers several ways to address this.

**When to use:** When your data contains `NaN` (Not a Number) or other indicators of missing information.

**Steps:**

1.  **Identify missing values** using `.isnull()` and `.sum()`.
2.  **Choose a strategy:**
    *   **Imputation:** Filling missing values with a statistic (mean, median, mode) or a model-based prediction.
    *   **Deletion:** Removing rows or columns with too many missing values.

**Code Example (Imputation with Mean):**

```python
# Check for missing values
print("\nMissing values per column before imputation:")
print(df.isnull().sum())

# Impute missing numerical values with the mean of their respective columns
for col in df.select_dtypes(include=['float64', 'int64']).columns:
    if df[col].isnull().any():
        mean_val = df[col].mean()
        df[col].fillna(mean_val, inplace=True)
        print(f"Imputed missing values in '{col}' with mean: {mean_val:.2f}")

# Impute missing categorical values with the mode (most frequent value)
for col in df.select_dtypes(include=['object']).columns:
    if df[col].isnull().any():
        mode_val = df[col].mode()[0] # mode() returns a Series, take the first element
        df[col].fillna(mode_val, inplace=True)
        print(f"Imputed missing values in '{col}' with mode: '{mode_val}'")

print("\nMissing values per column after imputation:")
print(df.isnull().sum())
```

**How it works:**
*   `.isnull().sum()` counts the number of missing values in each column.
*   `df.select_dtypes()` filters columns by data type.
*   `.mean()` calculates the average of a numerical column.
*   `.mode()` finds the most frequent value in a column.
*   `.fillna()` replaces `NaN` values. `inplace=True` modifies the DataFrame directly.

### Correcting Data Types

Ensuring columns have the correct data type is crucial for operations.

**When to use:** When numerical data is read as strings, or dates are not recognized as datetime objects.

**Steps:**

1.  **Check current data types** using `df.dtypes`.
2.  **Use `astype()`** to convert columns to the desired type.

**Code Example:**

```python
# Check current data types
print("\nData types before conversion:")
print(df.dtypes)

# Example: Convert a column named 'price' from object to float
if 'price' in df.columns and df['price'].dtype == 'object':
    try:
        df['price'] = df['price'].str.replace('[$,]', '', regex=True).astype(float)
        print("Converted 'price' column to float.")
    except ValueError:
        print("Could not convert 'price' column to float. Check for non-numeric characters.")

# Example: Convert a column named 'order_date' to datetime
if 'order_date' in df.columns:
    try:
        df['order_date'] = pd.to_datetime(df['order_date'])
        print("Converted 'order_date' column to datetime.")
    except Exception as e:
        print(f"Could not convert 'order_date' column to datetime: {e}")

# Check data types after conversion
print("\nData types after conversion:")
print(df.dtypes)
```

**How it works:**
*   `df.dtypes` shows the current data type of each column.
*   `astype()` is a powerful method for type casting. We often need to clean up strings (like removing currency symbols or commas) before converting to numeric types.
*   `pd.to_datetime()` attempts to parse strings into datetime objects.

## Stage 3: Exploratory Data Analysis (EDA)

EDA is about understanding your data's characteristics, identifying patterns, and spotting anomalies.

### Summary Statistics

Getting a quick overview of numerical data.

**When to use:** To understand the distribution, central tendency, and spread of numerical features.

**Steps:**

1.  **Use `df.describe()`** for numerical columns.
2.  **Use `df.describe(include='object')`** for categorical columns.

**Code Example:**

```python
print("\nSummary statistics for numerical columns:")
print(df.describe())

print("\nSummary statistics for categorical columns:")
print(df.describe(include='object'))
```

**How it works:** `.describe()` provides count, mean, standard deviation, min, max, and quartiles for numerical data. For object types, it provides count, unique values, the most frequent value (top), and its frequency.

### Value Counts

Understanding the distribution of unique values in categorical columns.

**When to use:** To see the frequency of each category within a feature.

**Steps:**

1.  **Select a categorical column.**
2.  **Use `.value_counts()`**.

**Code Example:**

```python
if 'category' in df.columns:
    print("\nValue counts for the 'category' column:")
    print(df['category'].value_counts())
```

**How it works:** This method returns a Series containing counts of unique values, sorted in descending order.

## Stage 4: Feature Engineering

Creating new features can often improve model performance by providing more relevant information.

### Creating New Features from Existing Ones

This could involve combining columns, extracting components from dates, or creating interaction terms.

**When to use:** When you believe new features can better represent the underlying patterns in the data for your model.

**Steps:**

1.  **Identify potential new features.**
2.  **Write Python code** to derive them using DataFrame operations.

**Code Example (Extracting Day of Week from Date):**

```python
# Assuming 'order_date' is a datetime column from Stage 2
if 'order_date' in df.columns and pd.api.types.is_datetime64_any_dtype(df['order_date']):
    df['day_of_week'] = df['order_date'].dt.day_name()
    print("\nCreated 'day_of_week' feature.")
    print(df[['order_date', 'day_of_week']].head())
```

**How it works:** The `.dt` accessor for datetime series in pandas allows us to extract various components like the day name, month, year, hour, etc.

## Stage 5: Model Building & Training

This is where you select and train a machine learning model. For simplicity, we'll use a common classification task.

### Using Scikit-learn

The `scikit-learn` library is the go-to for machine learning in Python.

**When to use:** For a wide range of supervised and unsupervised learning tasks.

**Steps:**

1.  **Import necessary modules** (e.g., model class, train_test_split).
2.  **Define features (X) and target (y).**
3.  **Split data** into training and testing sets.
4.  **Instantiate the model.**
5.  **Train the model** using the `.fit()` method.

**Code Example (Logistic Regression):**

```python
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import StandardScaler
import numpy as np # Import numpy for handling potential NaNs after operations

# Example: Predicting a binary 'is_high_value' target based on 'price' and 'quantity'
# First, let's create a dummy target variable if it doesn't exist
if 'is_high_value' not in df.columns:
    df['is_high_value'] = (df['price'] > df['price'].quantile(0.75)).astype(int)
    print("\nCreated dummy 'is_high_value' target.")

# Define features and target
# Ensure all features are numeric and handle potential NaNs that might have crept in
feature_cols = ['price', 'quantity'] # Example features
# Filter for columns that exist and are numeric
valid_feature_cols = [col for col in feature_cols if col in df.columns and pd.api.types.is_numeric_dtype(df[col])]

X = df[valid_feature_cols].copy()
y = df['is_high_value']

# Handle any remaining NaNs in features after selection (e.g., if quantity had NaNs)
for col in X.columns:
    if X[col].isnull().any():
        # Simple imputation with median as a fallback if mean imputation missed something
        median_val = X[col].median()
        X[col].fillna(median_val, inplace=True)
        print(f"Fallback imputation for NaN in '{col}' with median: {median_val:.2f}")


# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Scale numerical features (important for many models like Logistic Regression)
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Instantiate and train the model
model = LogisticRegression()
model.fit(X_train_scaled, y_train)

print("\nLogistic Regression model trained.")
```

**How it works:**
*   `train_test_split` divides your data to evaluate how the model generalizes to unseen data. `random_state` ensures reproducibility.
*   `StandardScaler` standardizes features by removing the mean and scaling to unit variance. This is crucial for algorithms that are sensitive to the scale of input features.
*   `LogisticRegression` is a common algorithm for classification.
*   `.fit()` trains the model on the provided training data.

## Stage 6: Model Evaluation

Assessing how well your model performs is critical.

### Evaluating Model Performance

Using metrics relevant to your problem.

**When to use:** After training a model to quantify its effectiveness.

**Steps:**

1.  **Make predictions** on the test set using `model.predict()`.
2.  **Calculate evaluation metrics** (e.g., accuracy, precision, recall, F1-score).

**Code Example:**

```python
# Make predictions
y_pred = model.predict(X_test_scaled)

# Calculate accuracy
accuracy = accuracy_score(y_test, y_pred)
print(f"\nModel Accuracy: {accuracy:.4f}")

# You can add other metrics like:
# from sklearn.metrics import classification_report
# print("\nClassification Report:")
# print(classification_report(y_test, y_pred))
```

**How it works:**
*   `.predict()` uses the trained model to generate predictions for the test set.
*   `accuracy_score` compares the predicted labels (`y_pred`) against the true labels (`y_test`) and returns the proportion of correct predictions.

By following these concrete Python coding steps, you can effectively implement and orchestrate the core stages of the data science workflow. Remember that each stage might involve more complex techniques depending on the specific dataset and problem.

## Supports

- [[implement-data-science-workflow-in-python-workflow-steps|Implement Data Science Workflow in Python workflow steps]]
