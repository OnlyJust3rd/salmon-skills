---
type: "medium"
title: "Understanding Data Quality Dimensions"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/data/data-platforms/data-cleansing/microskills/data-quality-dimensions|Data Quality Dimensions]]"
---
# Understanding Data Quality Dimensions

Data quality is crucial for any data-driven task. Poor data quality leads to flawed analysis, incorrect conclusions, and wasted effort. Understanding the different dimensions of data quality helps us identify and address these issues effectively during data cleansing.

## What are Data Quality Dimensions?

Data quality dimensions are specific characteristics used to measure the fitness of data for its intended purpose. Think of them as different ways to inspect your data for problems. For this lesson, we'll focus on three key dimensions:

*   **Completeness:** This refers to whether all the required data is present. Are there missing values where there shouldn't be?
*   **Consistency:** This means that data values are uniform across different instances and sources. Do the same pieces of information always look the same?
*   **Accuracy:** This is about how well the data reflects the real world. Are the values correct and truthful?

## Practical Scenario: Customer Database

Imagine you're working with a customer database for an e-commerce company. Your goal is to send out a targeted marketing campaign. Let's see how different data quality dimensions can cause problems:

**1. Completeness:**

*   **Issue:** Many customer records are missing email addresses.
*   **Impact:** You can't email these customers for your marketing campaign, limiting its reach and effectiveness.
*   **Example:**
    | Customer ID | Name    | Email             | Phone Number |
    | :---------- | :------ | :---------------- | :----------- |
    | 101         | Alice   | alice@example.com | 555-1234     |
    | 102         | Bob     |                   | 555-5678     |
    | 103         | Charlie | charlie@ex.com    |              |

    In this snippet, Bob is missing an email, and Charlie is missing a phone number.

**2. Consistency:**

*   **Issue:** Customer names are entered in different formats (e.g., "John Smith", "smith, john", "J. Smith"). Phone numbers might be formatted with or without hyphens, or in different country codes.
*   **Impact:** It becomes difficult to group or identify unique customers. For example, if you try to count how many customers named "John Smith" you have, you might miss some due to inconsistent naming.
*   **Example:**
    | Customer ID | Name        | City       |
    | :---------- | :---------- | :--------- |
    | 201         | Jane Doe    | New York   |
    | 202         | DOE, JANE   | new york   |
    | 203         | J. Doe      | NYC        |

    "New York", "new york", and "NYC" represent the same city but are inconsistent. Similarly, the names are variations of the same person.

**3. Accuracy:**

*   **Issue:** Some customer addresses or phone numbers are outdated or incorrect. Perhaps a customer moved and didn't update their information, or a typo occurred during data entry.
*   **Impact:** Marketing materials might be sent to the wrong addresses, leading to wasted costs and a poor brand impression. Incorrect phone numbers can lead to failed outreach attempts.
*   **Example:**
    | Customer ID | Name     | Address         |
    | :---------- | :------- | :-------------- |
    | 301         | David Lee| 123 Main St     |
    | 302         | Sarah Kim| 456 Oak Ave     |
    | 303         | Michael B| 789 Pine Road   |

    If David Lee actually moved to "987 Maple Drive", then "123 Main St" is an inaccurate record.

## Why Data Cleansing Matters

Data cleansing is the process of identifying and correcting errors in your data. By addressing issues related to completeness, consistency, and accuracy, you ensure your data is reliable and trustworthy. This leads to better insights, more effective decision-making, and ultimately, better outcomes in your data science projects.

## Practice Task

Review the following snippet of product inventory data. Identify at least one example of each of the following data quality issues: completeness, consistency, and accuracy.

| Product ID | Product Name      | Category     | Stock Count | Price  | Last Updated |
| :--------- | :---------------- | :----------- | :---------- | :----- | :----------- |
| P001       | Laptop            | Electronics  | 50          | 1200.00 | 2023-10-26   |
| P002       | Desk Chair        | Furniture    |             | 150.50 | 2023-10-25   |
| P003       | Wireless Mouse    | Accessories  | 200         | 25.99  |              |
| P004       | Gaming Keyboard   | Accessories  | 75          | 89.00  | 2023/10/26   |
| P005       | Coffee Maker      | Appliances   | 30          | 45.00  | 2023-10-26   |
| P006       | Office Desk       | Furniture    | 15          | 300    | 2023-10-24   |
| P007       | Monitor 27"       | Electronics  | 40          | 300.00 | 2023-10-26   |
| P008       | USB-C Hub         | Accessories  | 150         | 35.00  | 2023-10-26   |
| P009       | Ergonomic Chair   | Furniture    | 10          | 275.00 | 2023-10-25   |
| P010       | External Hard Drive | Accessories  | 60          | 75.99  | 2023-10-26   |

## Self-Check Questions

1.  What would be the impact on a sales report if product prices were inconsistently formatted (e.g., some with "$", some without)?
2.  If "Stock Count" was incomplete for many products, what kind of business decisions might be negatively affected?
3.  How could you check for accuracy in the "Last Updated" date column?

## Supports

- [[skills/data/data-platforms/data-cleansing/microskills/data-quality-dimensions|Data Quality Dimensions]]
