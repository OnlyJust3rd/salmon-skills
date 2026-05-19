---
type: "medium"
title: "SQL Transformations in Snowflake"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/data/data-platforms/snowflake/microskills/transformation-model|Transformation Model]]"
---
# SQL Transformations in Snowflake

This lesson focuses on applying SQL transformations to data within your Snowflake warehouse. We'll explore common techniques to reshape, clean, and enrich your data using SQL, enabling you to prepare it for analysis and reporting.

## What are SQL Transformations?

SQL transformations are operations performed on data using SQL queries to alter its structure, content, or format. These transformations are crucial for data warehousing because raw data is rarely in a usable state for direct analysis. You might need to:

*   **Cleanse data:** Remove duplicates, handle missing values, correct inconsistencies.
*   **Restructure data:** Pivot, unpivot, aggregate, or join different tables.
*   **Derive new information:** Calculate new metrics, extract parts of existing data, or standardize formats.

Snowflake's powerful SQL engine makes these transformations efficient and scalable.

## Common Transformation Techniques

Let's dive into some practical SQL transformation techniques you'll frequently use in Snowflake.

### 1. Data Cleaning

Data cleaning is a fundamental step. Here are a few common cleaning tasks:

#### Removing Duplicates

Identifying and removing duplicate rows is essential for data integrity.

```sql
-- Example: Removing duplicate rows based on all columns
SELECT DISTINCT *
FROM your_table;

-- Example: Removing duplicates based on a specific set of columns, keeping the latest record (if timestamp is available)
WITH RankedData AS (
    SELECT
        *,
        ROW_NUMBER() OVER (PARTITION BY column1, column2 ORDER BY timestamp_column DESC) as rn
    FROM your_table
)
SELECT *
FROM RankedData
WHERE rn = 1;
```

**Explanation:**

*   `DISTINCT *` selects unique rows based on all columns.
*   The `ROW_NUMBER()` window function assigns a unique rank to each row within a partition (defined by `column1` and `column2`). The `ORDER BY timestamp_column DESC` ensures that if duplicates exist, the most recent record gets `rn = 1`. We then filter for `rn = 1`.

#### Handling Missing Values

Missing values (NULLs) can skew analysis. You can replace them with a default value or impute them.

```sql
-- Example: Replacing NULLs in a specific column with a default value
SELECT
    column1,
    COALESCE(column2, 'N/A') AS cleaned_column2, -- Replaces NULL with 'N/A'
    column3
FROM your_table;

-- Example: Replacing NULLs with the average of the column (for numerical data)
SELECT
    column1,
    COALESCE(column2, (SELECT AVG(column2) FROM your_table)) AS imputed_column2,
    column3
FROM your_table;
```

**Explanation:**

*   `COALESCE(expression1, expression2, ...)` returns the first non-NULL expression. It's excellent for providing default values.
*   The subquery `(SELECT AVG(column2) FROM your_table)` calculates the average for imputation.

### 2. Data Restructuring

Transforming the layout of your data is often necessary for reporting tools or specific analytical needs.

#### Aggregation

Summarizing data by grouping it based on certain criteria.

```sql
-- Example: Calculating total sales per product category
SELECT
    category,
    SUM(sales_amount) AS total_sales
FROM sales_data
GROUP BY category
ORDER BY total_sales DESC;
```

**Explanation:**

*   `SUM(sales_amount)` calculates the total sales for each group.
*   `GROUP BY category` defines the groups over which the aggregation is performed.

#### Pivoting and Unpivoting

*   **Pivoting:** Transforms rows into columns.
*   **Unpivoting:** Transforms columns into rows.

Snowflake supports the `PIVOT` and `UNPIVOT` clauses, making these operations straightforward.

```sql
-- Example: Pivoting sales data to show sales per month for each product
SELECT *
FROM (
    SELECT product_id, month_name, sales_amount
    FROM sales_data
)
PIVOT (
    SUM(sales_amount)
    FOR month_name IN ('January', 'February', 'March') -- Specify the months you want as columns
) AS pivoted_sales;

-- Example: Unpivoting data (e.g., from a wide format to a long format)
SELECT
    product_id,
    month_name,
    sales_amount
FROM sales_data_wide
UNPIVOT (
    sales_amount FOR month_name IN (jan_sales, feb_sales, mar_sales) -- Specify columns to unpivot
);
```

**Explanation:**

*   `PIVOT` takes an aggregation function (`SUM`), the column whose values will become the new column headers (`month_name`), and the specific values to use as new column headers (e.g., 'January', 'February').
*   `UNPIVOT` takes the name for the new value column (`sales_amount`), the name for the new attribute column (`month_name`), and the list of columns to transform into rows.

### 3. Data Enrichment and Derivation

Adding new information or deriving new fields from existing data.

#### String Manipulation

Extracting or modifying parts of text data.

```sql
-- Example: Extracting the domain from an email address
SELECT
    email,
    SUBSTRING(email FROM POSITION('@' IN email) + 1 FOR LENGTH(email)) AS email_domain
FROM users;

-- Example: Concatenating first and last names
SELECT
    first_name,
    last_name,
    first_name || ' ' || last_name AS full_name -- Using the || operator for concatenation
FROM employees;
```

**Explanation:**

*   `POSITION('@' IN email)` finds the starting position of the '@' symbol.
*   `SUBSTRING(string FROM start FOR length)` extracts a portion of a string.
*   `||` is Snowflake's standard concatenation operator.

#### Date and Time Functions

Transforming and extracting information from date/time fields.

```sql
-- Example: Extracting the year from a transaction date
SELECT
    transaction_id,
    transaction_date,
    YEAR(transaction_date) AS transaction_year,
    MONTH(transaction_date) AS transaction_month
FROM transactions;
```

**Explanation:**

*   `YEAR()` and `MONTH()` are built-in functions to extract the respective components from a date.

## Applying Transformations in Snowflake

When you apply these transformations, consider:

*   **Performance:** For large datasets, optimize your queries. Snowflake's caching and query optimization help, but efficient SQL is still key.
*   **Readability:** Use CTEs (Common Table Expressions) to break down complex transformations into manageable, readable steps.
*   **Reusability:** Consider creating views for frequently used transformations, making them accessible and maintainable.

```sql
-- Example using a CTE for a multi-step transformation
WITH CleanedSales AS (
    SELECT
        *,
        COALESCE(product_id, 'UNKNOWN') AS cleaned_product_id
    FROM raw_sales
    WHERE sale_date IS NOT NULL
),
AggregatedSales AS (
    SELECT
        cleaned_product_id,
        SUM(sale_amount) AS total_revenue
    FROM CleanedSales
    GROUP BY cleaned_product_id
)
SELECT *
FROM AggregatedSales;
```

By mastering these SQL transformation techniques, you'll be well-equipped to prepare and analyze data effectively within your Snowflake environment.

## Supports

- [[skills/data/data-platforms/snowflake/microskills/transformation-model|Transformation Model]]
