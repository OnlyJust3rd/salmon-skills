---
type: "medium"
title: "Building Your Mart Model with dbt: Testing and Lineage in Practice"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/data-ai/data-engineering-platforms/dbt/microskills/mart-model|mart-model]]"
learning-time-in-minutes: 4
---
# Building Your Mart Model with dbt: Testing and Lineage in Practice

In the world of data analytics, a "mart model" is a crucial step in transforming raw data into a readily usable format for business intelligence and reporting. These models are typically structured, curated datasets designed for specific business functions or departments. dbt (data build tool) provides powerful features to not only build these marts but also ensure their quality and understand how they connect to your broader data landscape through testing and lineage.

This lesson focuses on applying dbt model testing and lineage concepts specifically within the context of creating a mart model.

## Understanding the Mart Model's Purpose

Before diving into dbt specifics, let's clarify the role of a mart model. Think of it as a refined kitchen where ingredients (raw data) are transformed into ready-to-serve dishes (analytics-ready datasets).

*   **Purpose:** To serve specific business needs (e.g., a sales mart, a marketing mart, a finance mart).
*   **Characteristics:**
    *   Denormalized or star-schema like structures.
    *   Aggregated or filtered data.
    *   Clearly defined business logic.
    *   Optimized for querying by analysts and BI tools.

## Core dbt Concepts for Mart Models

When building mart models in dbt, two key features ensure their reliability and understandability: **Testing** and **Lineage**.

### 1. Model Testing

Testing in dbt is about verifying the quality and correctness of your data. For mart models, this is paramount because they are often the final layer of transformation before data hits dashboards or reports.

**Types of Tests Relevant to Mart Models:**

*   **Uniqueness Tests:** Ensure that a specific column or set of columns in your mart model contains unique values. This is vital for primary keys or identifying distinct entities.
*   **Not Null Tests:** Verify that no records in your mart model have missing values for critical columns.
*   **Accepted Values Tests:** Check if values in a column conform to a predefined list of acceptable entries. Useful for categorical data like status codes or product types.
*   **Relationships Tests:** Confirm that foreign key relationships between tables (even within your mart or to upstream staging models) are valid. This prevents data integrity issues.
*   **Custom SQL Tests:** For more complex validation logic specific to your mart's business rules.

**Applying Tests to a Mart Model (Example)**

Let's imagine we're building a `dim_customers` mart model.

**`models/marts/dim_customers.sql`:**

```sql
{{
  config(
    materialized='table'
  )
}}

SELECT
    customer_id,
    first_name,
    last_name,
    email,
    signup_date,
    last_purchase_date,
    customer_lifetime_value -- Assuming this is calculated upstream
FROM {{ ref('stg_customers') }}
WHERE is_active = TRUE -- Filtering for active customers only for this mart
```

Now, let's add tests in a `schema.yml` file.

**`models/marts/schema.yml`:**

```yaml
version: 2

models:
  - name: dim_customers
    description: "Dimension table for active customers."
    columns:
      - name: customer_id
        description: "Unique identifier for the customer."
        tests:
          - unique
          - not_null

      - name: first_name
        description: "Customer's first name."
        tests:
          - not_null

      - name: email
        description: "Customer's email address."
        tests:
          - not_null
          - unique # Email should ideally be unique for a customer

      - name: signup_date
        description: "Date the customer signed up."
        tests:
          - not_null

      - name: last_purchase_date
        description: "Date of the customer's last purchase."
        tests:
          - not_null # For active customers, we expect a last purchase date

      - name: customer_lifetime_value
        description: "The total value a customer has brought to the business."
        tests:
          - not_null
          - dbt_expectations.expect_column_values_to_be_between: # Example custom test
              column_values_to_be_between: { min: 0, max: 1000000 }
```

**Running Tests:**

To run these tests, you'd use the dbt CLI:

```bash
dbt test --select models/marts/dim_customers.sql
```

This command will execute all tests defined for the `dim_customers` model.

### 2. Data Lineage

Data lineage shows the journey of your data – where it comes from, how it's transformed, and where it goes. For mart models, understanding lineage is crucial for:

*   **Impact Analysis:** If a source table changes, what mart models will be affected?
*   **Debugging:** When an issue is found in a mart, where did it originate?
*   **Documentation:** Providing transparency to stakeholders about data flow.

dbt automatically generates lineage information based on your `ref()` and `source()` functions.

**How Lineage Works with Mart Models:**

When you use `{{ ref('model_name') }}` or `{{ source('source_name', 'table_name') }}` in your SQL, dbt understands these dependencies. The dbt docs and the dbt Cloud UI visually represent this.

**Generating and Viewing Lineage:**

1.  **Compile and Run:** First, ensure your dbt project is compiled and models are built.
2.  **Generate Docs:**
    ```bash
    dbt docs generate
    ```
3.  **Serve Docs:**
    ```bash
    dbt docs serve
    ```
    This will open a local web server (usually at `http://localhost:8080`) where you can explore your project's documentation, including the lineage graph.

**Interpreting the Lineage Graph for Marts:**

In the generated documentation, you'll see your `dim_customers` mart model. Arrows will point from its upstream dependencies (e.g., `stg_customers`) to `dim_customers`. If other models or analyses depend on `dim_customers`, arrows will point from `dim_customers` to them. This visual representation clearly shows how your mart fits into the larger data ecosystem.

**Example Lineage Scenario:**

If you have a `fct_orders` mart model that consumes `dim_customers`, the lineage graph would show:

`stg_customers` -> `dim_customers` -> `fct_orders`

This tells you that `dim_customers` is built on `stg_customers` and is a prerequisite for `fct_orders`.

## Best Practices for Mart Model Testing and Lineage

*   **Test Early, Test Often:** Integrate tests into your development workflow.
*   **Prioritize Critical Columns:** Focus tests on columns essential for business logic and reporting.
*   **Document Your Marts:** Use descriptions in your `schema.yml` to explain the purpose of each mart model and column.
*   **Leverage dbt Docs:** Regularly generate and review your documentation to understand lineage and keep it up-to-date.
*   **Use Descriptive Test Names:** For custom SQL tests, use names that clearly indicate what is being tested.

By diligently applying dbt's testing and lineage features, you ensure that your mart models are not only well-structured and analytics-ready but also reliable, transparent, and maintainable components of your data platform.

## Supports

- [[skills/computing/data-ai/data-engineering-platforms/dbt/microskills/mart-model|Mart Model]]
