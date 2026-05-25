---
type: "medium"
title: "SQL Models: Query-Defined Datasets in dbt"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/data-ai/data-engineering-platforms/dbt/microskills/sql-model|sql-model]]"
learning-time-in-minutes: 4
---
# SQL Models: Query-Defined Datasets in dbt

In the world of data analytics, efficiently organizing and transforming raw data into meaningful insights is crucial. dbt (data build tool) plays a vital role in this process, and at its core are **SQL models**. This lesson will help you understand what SQL models are and how they function within your data transformation workflows.

## What is a SQL Model?

At its simplest, a SQL model in dbt is a `SELECT` statement that defines a dataset. When you create a `.sql` file in your dbt project, you're essentially defining a potential data model. dbt takes this SQL query and, based on your configuration, materializes it into a table or view within your data warehouse.

Think of it like this:

*   **Raw Data:** The ingredients you start with (e.g., raw tables from your transactional database or cloud storage).
*   **SQL Model:** A recipe that specifies how to combine, clean, and transform those ingredients into a finished dish.
*   **dbt:** The chef that follows your recipe, preparing the dish and presenting it neatly on a plate (your data warehouse).

## Key Concepts of SQL Models

1.  **`SELECT` Statement:** The fundamental building block of any SQL model is a `SELECT` statement. This query defines the structure and content of the resulting dataset. It can involve selecting columns, applying functions, joining tables, filtering rows, and performing aggregations.

2.  **Materialization:** dbt doesn't just run your `SELECT` statement once. It manages how this query is *materialized* in your data warehouse. The common materialization types are:
    *   **Table:** dbt creates a new physical table in your warehouse, populated with the results of your query. This is useful for complex transformations or when you need a stable, performant dataset.
    *   **View:** dbt creates a virtual table that represents the results of your query. When you query a view, the underlying `SELECT` statement is executed on the fly. This is efficient for simpler transformations or when you want to ensure your data is always up-to-date with the source.
    *   **Incremental:** (More advanced) dbt builds a table incrementally, only processing new or changed data since the last run. This is powerful for large datasets where full table rebuilds are time-consuming.

3.  **Dependencies:** SQL models can depend on other SQL models. dbt automatically understands these relationships, creating a directed acyclic graph (DAG) of your data transformations. This means dbt knows the correct order to run your models, ensuring that a model's dependencies are processed before it is.

## Why Use SQL Models?

SQL models are essential for structuring and standardizing your data transformations within dbt:

*   **Readability and Maintainability:** By breaking down complex data pipelines into smaller, well-defined SQL models, you make your code easier to understand, debug, and modify.
*   **Reusability:** You can build intermediate models that serve as building blocks for multiple downstream models, avoiding redundant SQL logic.
*   **Version Control:** Because models are just `.sql` files, they integrate seamlessly with version control systems like Git, allowing you to track changes and collaborate effectively.
*   **Testing and Documentation:** dbt provides powerful features for testing your models and documenting their purpose, making your data more trustworthy and understandable for others.
*   **Reproducibility:** dbt ensures that your transformations are reproducible. With the same source data and dbt project, you'll always get the same output.

## A Simple SQL Model Example

Let's say you have two raw tables in your data warehouse: `raw_customers` and `raw_orders`. You want to create a model that shows customers and the total amount they've spent.

**`models/marts/customer_orders_summary.sql`**

```sql
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    SUM(o.order_total) AS total_spent
FROM {{ ref('raw_customers') }} AS c
JOIN {{ ref('raw_orders') }} AS o
  ON c.customer_id = o.customer_id
GROUP BY 1, 2, 3
ORDER BY total_spent DESC
```

**Explanation:**

*   `{{ ref('raw_customers') }}` and `{{ ref('raw_orders') }}` are dbt Jinja macros. `ref()` tells dbt that this model depends on the `raw_customers` and `raw_orders` models (or tables). dbt will automatically prepend the correct schema and table name for you.
*   We're performing a `JOIN` to link customers to their orders.
*   `SUM(o.order_total)` calculates the total amount spent by each customer.
*   `GROUP BY 1, 2, 3` groups the results by customer ID, first name, and last name.
*   `ORDER BY total_spent DESC` sorts the results to show the highest-spending customers first.

When you run `dbt run`, dbt will execute this SQL. Depending on your `dbt_project.yml` configuration, this query will materialize as a table or a view named `customer_orders_summary` in your data warehouse.

## Mistakes to Avoid

*   **Hardcoding Table Names:** Always use `{{ ref('your_model_name') }}` instead of directly writing `your_schema.your_table_name`. This makes your project portable and easier to manage.
*   **Overly Complex Single Models:** Break down very large or complex transformations into smaller, intermediate models. This improves readability and testability.
*   **Ignoring Dependencies:** While dbt manages dependencies, ensure your `ref()` statements accurately reflect the relationships between your models.

By mastering the concept of SQL models, you are taking a significant step towards building robust, maintainable, and scalable data transformation pipelines with dbt.

## Supports

- [[skills/computing/data-ai/data-engineering-platforms/dbt/microskills/sql-model|SQL Model]]
