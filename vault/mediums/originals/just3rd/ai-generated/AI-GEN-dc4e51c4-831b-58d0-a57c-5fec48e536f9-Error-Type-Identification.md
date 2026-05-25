---
type: "medium"
title: "Identifying Data Errors: Your First Step in Data Quality"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/data-ai/data-engineering-platforms/data-cleansing/microskills/error-type-identification|error-type-identification]]"
learning-time-in-minutes: 4
---
# Identifying Data Errors: Your First Step in Data Quality

Understanding data quality is crucial in data science. Before we can clean data, we need to know what kinds of problems can exist. This lesson focuses on recognizing common data errors, a key step in ensuring your data is reliable.

## What are Data Errors?

Data errors are mistakes or inaccuracies within a dataset. They can lead to flawed analysis, incorrect conclusions, and poor decision-making. Recognizing these errors is the first hurdle in the data cleansing process.

### Common Types of Data Errors:

*   **Missing Values:** This occurs when a data point for a specific variable is absent.
    *   *Example:* A customer record with no entry for "Email Address."

*   **Inconsistent Formatting:** Data that is recorded in different ways for the same type of information.
    *   *Example:* Dates recorded as "01/05/2023", "May 1st, 2023", and "2023-05-01" all in the same column.

*   **Outliers:** Data points that are significantly different from other observations in the dataset. These can be genuine extreme values or errors.
    *   *Example:* An age recorded as 200 years old in a dataset of human ages.

*   **Duplicate Records:** Entire rows or entries that are exact copies of each other, which can skew analysis.
    *   *Example:* A customer listed twice with the same contact information.

*   **Typos and Misspellings:** Simple typing errors that can lead to variations in categorical data.
    *   *Example:* "New York", "New Yrok", and "N.Y." all referring to the same city.

*   **Invalid Data Types:** Data that does not conform to its expected type.
    *   *Example:* A numerical field containing text characters like "N/A".

## Scenario: Customer Feedback Analysis

Imagine you're analyzing customer feedback for a new product. Your dataset includes customer ratings (1-5 stars), comments, and customer IDs.

Here's a snippet of your data:

| Customer ID | Rating | Comment                                |
| :---------- | :----- | :------------------------------------- |
| 101         | 5      | Loved the new features!                |
| 102         | 3      | It's okay, but could be better.        |
| 103         |        |                                        |
| 104         | 4      | Great product, very intuitive.         |
| 105         | 2      | Not what I expected.                   |
| 106         | 5      | Absolutely amazing, 5 stars!           |
| 107         | 1      | Very dissapointing.                    |
| 101         | 5      | Loved the new features!                |
| 108         | 6      | Too good to be true!                   |
| 109         | 4      | Good value.                            |
| 110         | 3      | Works, but has some glitches.          |
| 111         |        | The UI is confusing.                   |
| 112         | 3      | It's okay, but could be better.        |
| 113         | 1      | Very disappointing.                    |
| 114         | 5      | Loved the new features!                |
| 115         | 2      | Not what I expected.                   |

Let's identify some errors:

1.  **Missing Values:** Customer IDs 103 and 111 have missing ratings.
2.  **Duplicate Records:** Customer ID 101 appears twice with the exact same rating and comment.
3.  **Outliers:** Customer 108 has a rating of 6, which is outside the expected 1-5 star range.
4.  **Typos/Misspellings:** "dissapointing" (Customer 107) and "disappointing" (Customer 113) are slight variations of the same word.
5.  **Inconsistent Formatting (Implied):** While not explicit in this small sample, imagine if comments were sometimes in all caps or had extra punctuation, making direct text comparison difficult.

## Practice Task

Review the following small dataset and identify at least three different types of data errors present.

| Order ID | Product Name      | Quantity | Price | Order Date | Status   |
| :------- | :---------------- | :------- | :---- | :--------- | :------- |
| 1001     | Widget A          | 5        | 10.00 | 2023-10-26 | Shipped  |
| 1002     | Gadget B          | 2        | 25.50 | 2023-10-26 | Pending  |
| 1003     | Widget A          | 3        | 10.00 | 2023-10-27 | Shipped  |
| 1004     | Thingamajig C     | 1        | 100.00 | 2023-10-27 | Cancelld |
| 1005     | Gadget B          | 2        | 25.50 | 2023-10-28 | Shipped  |
| 1006     | Widget A          | 5        | 10.00 | 2023-10-28 | Shipped  |
| 1007     | Thingamajig C     | 1        | 100.00 | 2023-10-29 |           |
| 1008     | Gizmo D           | 10       | 5.00  | 2023-10-29 | Shipped  |
| 1004     | Thingamajig C     | 1        | 100.00 | 2023-10-27 | Cancelld |
| 1009     | Widget A          | 4        | 10.00 | 2023-10-30 | Shipped  |
| 1010     | Gadget B          | 2        | 25.50 | 2023-10-30 | Pending  |
| 1011     | Thingamajig C     | 1        | 100.00 | 2023-10-31 | Cancelled|

## Self-Check Questions

1.  What is the primary risk of having missing values in your dataset?
2.  Why is inconsistent formatting a problem, even if the underlying data is correct?
3.  Can an outlier always be considered an error? Explain your reasoning.
4.  List two different examples of typos you might find in a product name column.

## Supports

- [[skills/computing/data-ai/data-engineering-platforms/data-cleansing/microskills/error-type-identification|Error Type Identification]]
