---
type: "medium"
title: "Crafting Reports and Explorations with Analytical SQL in BigQuery"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/data-ai/data-engineering-platforms/google-bigquery/microskills/analytical-sql|analytical-sql]]"
learning-time-in-minutes: 4
---
# Crafting Reports and Explorations with Analytical SQL in BigQuery

This lesson focuses on using SQL to write queries for reporting and exploration within Google BigQuery, building upon the concepts of BigQuery partitioning. We'll explore common analytical SQL techniques that help you derive insights from your data.

## Understanding Your Data's Story

Analytical SQL is your tool for uncovering the narrative within your datasets. It's not just about retrieving data; it's about transforming raw information into actionable insights. When working with BigQuery, especially with partitioned tables, efficient and well-structured queries are paramount for performance and clarity.

## Common Analytical SQL Techniques

Here are some core techniques you'll use regularly for reporting and exploration:

### 1. Aggregation with `GROUP BY`

Aggregation functions like `COUNT()`, `SUM()`, `AVG()`, `MIN()`, and `MAX()` are fundamental for summarizing data. `GROUP BY` is used to group rows that have the same values in specified columns into a summary row.

**When to Use:**
*   To calculate totals, averages, or counts across categories.
*   To understand the distribution of data.

**Example:**
Let's say you have a `sales` table partitioned by `sale_date` and you want to find the total sales amount per product category for a specific month.

```sql
SELECT
    product_category,
    SUM(sale_amount) AS total_sales
FROM
    `your_project.your_dataset.sales`
WHERE
    -- Assuming 'sale_date' is a DATE or TIMESTAMP column and you're filtering a specific partition
    EXTRACT(YEAR FROM sale_date) = 2023
    AND EXTRACT(MONTH FROM sale_date) = 10
GROUP BY
    product_category
ORDER BY
    total_sales DESC;
```

**Explanation:**
*   We select `product_category` and the `SUM` of `sale_amount`, aliasing it as `total_sales`.
*   The `FROM` clause specifies our partitioned `sales` table.
*   The `WHERE` clause filters for a specific month in 2023. This is crucial for performance as it targets specific partitions.
*   `GROUP BY product_category` collapses rows with the same category, allowing `SUM()` to aggregate sales for each.
*   `ORDER BY total_sales DESC` sorts the results to show the highest-selling categories first.

### 2. Window Functions for Sophisticated Analysis

Window functions perform calculations across a set of table rows that are somehow related to the current row. Unlike aggregate functions that collapse rows, window functions return a value for *each* row.

**When to Use:**
*   Calculating running totals or moving averages.
*   Ranking items within partitions.
*   Comparing a row's value to the average of its partition.

**Example:**
Calculate the running total of sales for each product category.

```sql
SELECT
    sale_date,
    product_category,
    sale_amount,
    SUM(sale_amount) OVER (PARTITION BY product_category ORDER BY sale_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total_sales
FROM
    `your_project.your_dataset.sales`
WHERE
    EXTRACT(YEAR FROM sale_date) = 2023
    AND EXTRACT(MONTH FROM sale_date) = 10;
```

**Explanation:**
*   `SUM(sale_amount) OVER (...)` indicates a window function.
*   `PARTITION BY product_category` divides the rows into partitions based on `product_category`. The `SUM` is calculated independently for each category.
*   `ORDER BY sale_date` within each partition ensures the sum is cumulative over time.
*   `ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW` explicitly defines the window frame to include all rows from the beginning of the partition up to the current row. This is often the default for `ORDER BY` in `SUM` but is good to be explicit.

### 3. Common Table Expressions (CTEs) for Readability and Structure

CTEs, defined using the `WITH` clause, allow you to create temporary, named result sets that you can reference within a single SQL statement. They improve query readability and can simplify complex logic.

**When to Use:**
*   Breaking down complex queries into smaller, logical steps.
*   Reusing intermediate results multiple times in a query.
*   Improving the maintainability of your SQL code.

**Example:**
Find customers who spent more than the average spending per customer for the month of October 2023.

```sql
WITH MonthlySales AS (
    SELECT
        customer_id,
        SUM(sale_amount) AS total_spent
    FROM
        `your_project.your_dataset.sales`
    WHERE
        EXTRACT(YEAR FROM sale_date) = 2023
        AND EXTRACT(MONTH FROM sale_date) = 10
    GROUP BY
        customer_id
),
AverageSales AS (
    SELECT
        AVG(total_spent) AS average_spending
    FROM
        MonthlySales
)
SELECT
    ms.customer_id,
    ms.total_spent
FROM
    MonthlySales ms
CROSS JOIN
    AverageSales avg_s
WHERE
    ms.total_spent > avg_s.average_spending;
```

**Explanation:**
*   `MonthlySales` CTE calculates the total amount spent by each customer in October 2023.
*   `AverageSales` CTE calculates the average of these `total_spent` values.
*   The final `SELECT` statement joins these two CTEs (implicitly through `CROSS JOIN` here, as `AverageSales` returns only one row) and filters for customers whose spending exceeds the overall average.

### 4. Conditional Logic with `CASE` Statements

`CASE` statements allow you to implement if-then-else logic within your SQL queries, enabling you to categorize data or transform values based on conditions.

**When to Use:**
*   Creating custom categories or bins for data.
*   Mapping values from one format to another.
*   Assigning different values based on specific criteria.

**Example:**
Categorize sales into 'High', 'Medium', or 'Low' based on `sale_amount`.

```sql
SELECT
    sale_id,
    sale_amount,
    CASE
        WHEN sale_amount >= 1000 THEN 'High Value'
        WHEN sale_amount >= 500 AND sale_amount < 1000 THEN 'Medium Value'
        ELSE 'Low Value'
    END AS sale_category
FROM
    `your_project.your_dataset.sales`
WHERE
    EXTRACT(YEAR FROM sale_date) = 2023
    AND EXTRACT(MONTH FROM sale_date) = 10;
```

**Explanation:**
*   The `CASE` statement checks `sale_amount` against different conditions.
*   `WHEN ... THEN ...` pairs define the conditions and their corresponding output.
*   `ELSE` provides a default value if none of the `WHEN` conditions are met.
*   The result is a new column `sale_category` that classifies each sale.

## Putting It All Together: Exploration Example

Imagine you want to explore sales performance by region and product category for Q4 2023, looking at the number of transactions and the average sale value.

```sql
WITH QuarterlySales AS (
    SELECT
        region,
        product_category,
        COUNT(sale_id) AS transaction_count,
        AVG(sale_amount) AS average_sale_value
    FROM
        `your_project.your_dataset.sales`
    WHERE
        sale_date >= '2023-10-01' AND sale_date < '2024-01-01' -- Efficiently targets partitions
    GROUP BY
        region,
        product_category
)
SELECT
    qs.region,
    qs.product_category,
    qs.transaction_count,
    qs.average_sale_value,
    -- Add a ranking within each region
    RANK() OVER (PARTITION BY qs.region ORDER BY qs.average_sale_value DESC) AS rank_within_region
FROM
    QuarterlySales qs
ORDER BY
    qs.region,
    qs.average_sale_value DESC;
```

This query combines `GROUP BY` for aggregation, efficient date filtering to leverage partitioning, and a window function (`RANK()`) to provide additional analytical context. By mastering these techniques, you'll be well-equipped to perform effective reporting and data exploration in BigQuery.

## Supports

- [[skills/computing/data-ai/data-engineering-platforms/google-bigquery/microskills/analytical-sql|Analytical SQL]]
