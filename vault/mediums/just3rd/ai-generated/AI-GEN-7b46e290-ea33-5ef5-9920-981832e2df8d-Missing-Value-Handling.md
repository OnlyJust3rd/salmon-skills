---
type: "medium"
title: "Handling Missing Values"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/data/data-platforms/data-cleansing/microskills/missing-value-handling|missing-value-handling]]"
---
# Handling Missing Values

When preparing data for analysis or modeling, you'll often encounter missing values. These are represented as `NaN` (Not a Number) in many data science libraries, or sometimes as empty strings or specific placeholder values. Ignoring or mishandling missing data can lead to biased results or errors in your analysis. This lesson focuses on how to address these missing values.

## Why Missing Values Matter

Missing data can significantly impact your results. For example:

*   **Biased Statistics:** Averages or sums calculated with missing values can be skewed.
*   **Model Performance:** Many machine learning algorithms cannot handle missing values directly and will either error out or produce inaccurate predictions.
*   **Reduced Sample Size:** Simply removing rows with missing data can lead to a significant loss of valuable information, especially if missingness is widespread.

## Strategies for Missing Value Handling

There are two primary approaches: **imputation** (filling in missing values) and **deletion** (removing data points). The best approach depends on the nature of your data and the extent of missingness.

### 1. Deletion

#### a. Row Deletion (Listwise Deletion)

*   **Concept:** Remove entire rows (observations) that contain any missing values.
*   **When to use:** When the number of rows with missing data is very small compared to the total dataset size, and the missingness is random.
*   **Pros:** Simple to implement.
*   **Cons:** Can lead to a significant loss of data if missingness is common, potentially biasing your analysis.

#### b. Column Deletion

*   **Concept:** Remove entire columns (features) if they have a very high percentage of missing values.
*   **When to use:** If a feature is almost entirely missing, it's unlikely to provide useful information. A common threshold is >50% missing.
*   **Pros:** Reduces dimensionality and potential noise.
*   **Cons:** Loses all information from that feature, even if some data exists.

### 2. Imputation

#### a. Mean/Median/Mode Imputation

*   **Concept:** Replace missing values in a column with the mean (average), median (middle value), or mode (most frequent value) of that column.
    *   **Mean:** Best for numerical data with a symmetrical distribution.
    *   **Median:** More robust to outliers in numerical data.
    *   **Mode:** Best for categorical data.
*   **When to use:** Simple and fast for numerical or categorical data.
*   **Pros:** Preserves the dataset size.
*   **Cons:** Can distort the distribution of the variable and underestimate variance. It doesn't account for relationships between variables.

#### b. Forward Fill / Backward Fill (for Time Series or Ordered Data)

*   **Concept:**
    *   **Forward Fill:** Fills a missing value with the last known valid value.
    *   **Backward Fill:** Fills a missing value with the next known valid value.
*   **When to use:** When data has a natural order (e.g., time series) where it's reasonable to assume a value might persist.
*   **Pros:** Preserves data size, useful for ordered data.
*   **Cons:** Can propagate errors if the last/next value is not representative.

#### c. Advanced Imputation (e.g., K-Nearest Neighbors, Regression Imputation)

*   **Concept:** Use relationships with other variables to predict missing values. For example, KNN imputation finds the 'k' most similar data points and imputes based on their values. Regression imputation builds a model to predict the missing value based on other features.
*   **When to use:** When missingness is not random, and you believe other features can help predict the missing value.
*   **Pros:** Can produce more accurate imputations by considering relationships.
*   **Cons:** More computationally intensive and complex to implement.

## Practical Scenario

Imagine you have a dataset of customer orders, and some entries are missing the `shipping_date` or `product_category`.

*   If only 1% of orders are missing `shipping_date`, and the missingness seems random, you might choose to **delete those rows**.
*   If `product_category` is missing for 70% of orders, it's probably best to **delete the `product_category` column**.
*   If `product_category` is missing for 10% of orders, and you have other order details (like product ID), you could **impute** the missing category based on the product ID or by using the **mode** of the product category for that ID.
*   For `shipping_date`, if you have `order_date` and `delivery_time` (e.g., "3 days"), you could **calculate** a likely `shipping_date`.

## Practice Task

Using your preferred data manipulation library (e.g., Pandas in Python), load a dataset that you know contains missing values.

1.  Identify the columns with missing values and the percentage of missingness in each.
2.  For a numerical column with less than 5% missing values, try imputing with the **mean**.
3.  For a categorical column with less than 5% missing values, try imputing with the **mode**.
4.  Consider a column with more than 50% missing values and decide if it should be deleted.

## Self-Check Questions

1.  What is the primary risk of simply ignoring missing values in your dataset?
2.  When would you choose median imputation over mean imputation for a numerical feature?
3.  Under what condition is column deletion a more appropriate strategy than row deletion?
4.  What is a drawback of imputation methods that don't consider relationships between features?

## Supports

- [[skills/data/data-platforms/data-cleansing/microskills/missing-value-handling|Missing Value Handling]]
