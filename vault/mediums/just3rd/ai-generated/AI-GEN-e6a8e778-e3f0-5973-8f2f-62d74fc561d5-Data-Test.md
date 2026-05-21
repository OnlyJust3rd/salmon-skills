---
type: "medium"
title: "Data Tests: Assertions for Transformed Data Quality"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/data/data-platforms/dbt/microskills/data-test|data-test]]"
---
# Data Tests: Assertions for Transformed Data Quality

In the world of analytics engineering, ensuring the quality of your transformed data is paramount. You've spent time crafting your SQL transformations to clean, shape, and aggregate data. But how do you know if those transformations are working as intended, and that the output is reliable? This is where **data tests** come in. They act as automated checks, or assertions, that verify specific characteristics of your data.

Think of data tests like the quality control checks you might find in a manufacturing process. Before a product leaves the factory, it's inspected to ensure it meets certain standards. Data tests do the same for your data models. They help you catch issues early, before they propagate downstream to your dashboards, reports, or machine learning models.

## Why Do We Need Data Tests?

When building data pipelines, especially with tools like dbt, several things can go wrong:

*   **Bugs in SQL transformations:** A typo, a misunderstanding of logic, or an edge case can lead to incorrect results.
*   **Schema drift:** Downstream systems might change their data formats, breaking your transformations.
*   **Data corruption:** Issues in the source data itself can pass through your transformations undetected.
*   **Accidental deletions or duplicates:** Data might be lost or duplicated during processing.

Data tests provide a safety net. By defining expectations about your data and automating their verification, you can:

*   **Detect errors quickly:** When a test fails, you're alerted to a problem in your data pipeline.
*   **Build trust in your data:** Knowing that your data has passed rigorous tests increases confidence in its accuracy and reliability.
*   **Facilitate refactoring:** When you make changes to your SQL code, tests help ensure you haven't introduced regressions.
*   **Improve data documentation:** The tests themselves can serve as living documentation of the expected properties of your data models.

## Types of Data Tests

Data tests can be broadly categorized based on what they check. Common types include:

### Uniqueness Tests

**Purpose:** To ensure that a specific column (or set of columns) contains no duplicate values. This is crucial for primary keys or identifier columns.

**Example Scenario:** You have a `customers` table, and you expect each `customer_id` to be unique.

**SQL Logic (Conceptual):**
```sql
SELECT
    customer_id
FROM
    your_model
GROUP BY
    customer_id
HAVING
    COUNT(*) > 1
```
This query would identify any `customer_id` that appears more than once. A uniqueness test would fail if this query returns any rows.

### Not Null Tests

**Purpose:** To verify that a specific column does not contain any missing (NULL) values. This is important for columns that are essential for analysis or relationships.

**Example Scenario:** In your `orders` table, you expect every `order_date` to be present.

**SQL Logic (Conceptual):**
```sql
SELECT
    order_id
FROM
    your_model
WHERE
    order_date IS NULL
```
This query would find orders missing an `order_date`. A not-null test would fail if this query returns any rows.

### Referential Integrity Tests

**Purpose:** To ensure that values in one column (a foreign key) exist in another column (a primary key) in a different table or model. This is fundamental for relational databases.

**Example Scenario:** You have an `order_items` table and an `orders` table. You want to ensure that every `order_id` in `order_items` actually exists in the `orders` table.

**SQL Logic (Conceptual):**
```sql
SELECT
    oi.order_id
FROM
    order_items oi
LEFT JOIN
    orders o ON oi.order_id = o.order_id
WHERE
    o.order_id IS NULL
```
This query would identify `order_id`s in `order_items` that don't have a corresponding entry in `orders`. A referential integrity test would fail if this query returns any rows.

### Accepted Values Tests

**Purpose:** To check if the values in a column belong to a predefined set of acceptable values.

**Example Scenario:** You have a `users` table with a `status` column, and you expect the values to be only 'active', 'inactive', or 'pending'.

**SQL Logic (Conceptual):**
```sql
SELECT
    user_id,
    status
FROM
    your_model
WHERE
    status NOT IN ('active', 'inactive', 'pending')
```
This query would find users with invalid status values. An accepted values test would fail if this query returns any rows.

### Relationships Tests (More Advanced)

**Purpose:** To check relationships between columns, such as ensuring that for every value in column A, there's a unique value in column B, or that the sum of values in column X is always equal to the sum of values in column Y.

**Example Scenario:** In a sales model, the `total_price` should equal the `quantity` multiplied by the `unit_price` for each row.

**SQL Logic (Conceptual):**
```sql
SELECT
    order_item_id
FROM
    your_model
WHERE
    total_price <> (quantity * unit_price)
```
This query would identify order items where the calculated price doesn't match the recorded `total_price`.

## Implementing Data Tests with dbt

dbt has excellent built-in support for data testing. You define these tests in YAML configuration files alongside your model definitions.

**Example `models/staging/stg_customers.yml`:**

```yaml
version: 2

models:
  - name: stg_customers
    description: "Staging model for raw customer data."
    columns:
      - name: customer_id
        description: "Unique identifier for each customer."
        tests:
          - unique  # dbt will generate a SQL query to check for duplicates
          - not_null # dbt will generate a SQL query to check for NULLs

      - name: email
        description: "Customer's email address."
        tests:
          - unique
          - not_null
          - accepted_values:
              values: ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"] # Example: only allow common domains

      - name: country
        description: "Customer's country."
        tests:
          - relationships:
              to: ref('dim_countries') # Assumes you have a dim_countries model
              field: country_code # The column in dim_countries to join on
```

When you run `dbt test`, dbt will:
1.  Read these YAML files.
2.  Dynamically generate the appropriate SQL queries based on the test types.
3.  Execute these queries against your data warehouse.
4.  Report which tests pass and which fail.

## Best Practices for Data Testing

*   **Test critical columns:** Focus on columns that are essential for reporting, business logic, or data integrity.
*   **Test at different layers:** Consider testing at the staging, intermediate, and final mart layers. Staging tests catch source data issues, while mart tests ensure your final analytical models are correct.
*   **Keep tests focused:** Each test should ideally check for one specific condition.
*   **Don't over-test:** While important, excessive testing can slow down your `dbt test` runs. Prioritize what matters most.
*   **Name tests clearly:** If you write custom SQL tests, ensure their names and descriptions are informative.

By integrating data tests into your analytics engineering workflow, you are actively building more robust, reliable, and trustworthy data products. They are an essential tool for maintaining data quality and ensuring that your insights are based on sound data.

## Supports

- [[skills/data/data-platforms/dbt/microskills/data-test|Data Test]]
