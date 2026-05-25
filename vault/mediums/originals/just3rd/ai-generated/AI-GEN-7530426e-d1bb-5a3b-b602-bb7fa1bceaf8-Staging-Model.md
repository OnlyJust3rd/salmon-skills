---
type: "medium"
title: "Staging Models: Your First Step in dbt"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/data-ai/data-engineering-platforms/dbt/microskills/staging-model|staging-model]]"
learning-time-in-minutes: 4
---
# Staging Models: Your First Step in dbt

This lesson focuses on organizing cleaned source data using **staging models** within dbt, a fundamental step towards applying dbt model testing and lineage concepts. Staging models are your initial transformation layer, preparing raw data for downstream consumption.

## What are Staging Models?

Staging models are the first layer of your dbt project. Their primary purpose is to take your raw, untouched source data and perform light cleaning and standardization. Think of them as the "staging area" where you bring your data in, make it consistent, and ensure it's ready for more complex transformations.

Key characteristics of staging models:

*   **One-to-one mapping (mostly):** Ideally, a staging model corresponds to a single source table. The transformations applied are generally limited to renaming columns, casting data types, and simple de-duplication.
*   **Low complexity:** Avoid complex joins, aggregations, or business logic at this stage. The goal is to make the raw data more manageable, not to build final analytical tables.
*   **Documentation is crucial:** Since these are the first models, clear documentation is vital for understanding the source data and the applied cleaning steps.
*   **Focus on standardization:** Ensure consistent naming conventions and data types across different sources.

## Why Use Staging Models?

Employing staging models provides several benefits for your dbt project:

1.  **Cleanliness and Consistency:** They enforce basic data quality standards, making it easier to work with your data downstream.
2.  **Modularity and Maintainability:** By separating initial cleaning from complex transformations, your project becomes more organized and easier to update. If a source schema changes, you only need to adjust the relevant staging model.
3.  **Reduced Redundancy:** You perform these basic cleaning steps once in the staging model, rather than repeating them in every subsequent model that uses that source.
4.  **Foundation for Testing:** Cleaned and standardized data is much easier to test effectively.
5.  **Clear Lineage:** Staging models clearly indicate the origin of your data and the initial transformations applied, contributing to robust data lineage.

## Creating Your First Staging Model

Let's walk through creating a simple staging model. Assume you have a raw source table named `raw_orders` in your data warehouse, and you want to create a staging model for it.

### Step 1: Define Your Source

First, you need to tell dbt where your raw data lives. You do this in a `sources.yml` file, typically located in the `models/` directory.

```yaml
# models/staging/sources.yml
version: 2

sources:
  - name: raw_data # A logical grouping for your raw sources
    database: your_database_name # Replace with your actual database name
    schema: your_schema_name     # Replace with your actual schema name

    tables:
      - name: raw_orders
        description: "Raw order data from the e-commerce platform."
```

### Step 2: Create the Staging Model File

Next, create a SQL file for your staging model. Conventionally, staging models are placed in a `staging` directory and often prefixed with `stg_`.

```sql
-- models/staging/stg_orders.sql
SELECT
    order_id,
    customer_id,
    order_date,
    status,
    amount AS order_amount, -- Renaming for clarity
    created_at,
    updated_at
FROM {{ source('raw_data', 'raw_orders') }}
```

**Explanation:**

*   `{{ source('raw_data', 'raw_orders') }}`: This is a dbt macro that references your defined source. It dynamically generates the correct SQL to select from your `your_database_name.your_schema_name.raw_orders` table.
*   `amount AS order_amount`: Here, we're renaming a column from `amount` to `order_amount` for better semantic meaning. This is a common and useful transformation in staging models.

### Step 3: Add Model Configuration and Documentation

It's good practice to add documentation and potentially configuration to your staging model. You can do this in a `.yml` file alongside your SQL model.

```yaml
# models/staging/stg_orders.yml
version: 2

models:
  - name: stg_orders
    description: "Staging model for raw orders, standardizing column names and types."
    columns:
      - name: order_id
        description: "Unique identifier for each order."
        tests:
          - unique
          - not_null
      - name: customer_id
        description: "Identifier for the customer who placed the order."
      - name: order_date
        description: "The date the order was placed."
        tests:
          - not_null
      - name: status
        description: "Current status of the order (e.g., pending, shipped, delivered)."
      - name: order_amount
        description: "The total amount of the order."
        tests:
          - not_null
      - name: created_at
        description: "Timestamp when the order record was created in the source system."
      - name: updated_at
        description: "Timestamp when the order record was last updated in the source system."
```

**Explanation:**

*   `description`: Provides a human-readable explanation of the model and its columns.
*   `tests`: This is where we define basic data quality tests. Here, we've added `unique` and `not_null` tests to `order_id` and `not_null` to `order_date` and `order_amount`. These tests will run when you execute `dbt test`.

## Running Your Staging Model

To build your staging model in your data warehouse, navigate to your dbt project directory in your terminal and run:

```bash
dbt run --select stg_orders
```

To run the tests associated with your staging model:

```bash
dbt test --select stg_orders
```

## Common Pitfalls to Avoid

*   **Over-transformation:** Don't try to perform complex joins or business logic here. Keep it simple.
*   **Ignoring data types:** While dbt can infer some types, explicitly casting (e.g., `CAST(order_id AS VARCHAR)`) can prevent unexpected issues later.
*   **Lack of documentation:** Without clear documentation, other team members (or your future self) won't understand the data's origin or the transformations applied.
*   **Forgetting tests:** Basic tests at the staging layer catch issues early.

Staging models are your foundational building blocks. By organizing your raw data effectively here, you set yourself up for success when applying more advanced dbt features like model testing and understanding data lineage.

## Supports

- [[skills/computing/data-ai/data-engineering-platforms/dbt/microskills/staging-model|Staging Model]]
