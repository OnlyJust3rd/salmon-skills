---
type: "medium"
title: "Redshift Sort Keys: Speeding Up Your Queries"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/data-ai/data-engineering-platforms/amazon-redshift/microskills/sort-strategy|sort-strategy]]"
learning-time-in-minutes: 3
---
# Redshift Sort Keys: Speeding Up Your Queries

When working with Amazon Redshift, how you design your tables significantly impacts query performance. One crucial aspect of table design is choosing appropriate sort keys. A sort key tells Redshift how to physically store your data on disk, allowing it to efficiently skip irrelevant data blocks when you query.

## What is a Sort Key?

A sort key is a column or a set of columns that you designate when creating a Redshift table. Redshift stores the table's data sorted according to the values in these columns. This sorting allows Redshift to use "slice elimination" during query execution. Instead of scanning the entire table, Redshift can quickly determine which data blocks do not contain the relevant data based on your `WHERE` clause filters and skip reading them.

There are two types of sort keys:

*   **Compound Sort Keys:** When you specify multiple columns, Redshift sorts by the first column, then the second, and so on. The order is crucial.
*   **Interleaved Sort Keys:** Redshift distributes sort order across all specified columns, which can be beneficial if your queries frequently filter on different combinations of these columns.

For this lesson, we'll focus on choosing sort keys for common query filters, as this is where you'll see the most immediate performance gains.

## When to Use Sort Keys

Sort keys are most effective when:

*   You have large tables (millions or billions of rows).
*   Your queries frequently filter data using `WHERE` clauses on specific columns.
*   The columns you filter on have a reasonable number of distinct values (not too few, not too many).

## Practical Example: E-commerce Sales Data

Imagine an e-commerce company with a large `sales` table. Common queries include finding sales for a specific date, a particular customer, or a product category.

Here's a simplified `sales` table structure:

```sql
CREATE TABLE sales (
    sale_id BIGINT,
    sale_date DATE,
    customer_id INT,
    product_id INT,
    quantity INT,
    price DECIMAL(10, 2)
);
```

Let's consider some common query patterns:

1.  **Find all sales for a specific date:**
    `SELECT * FROM sales WHERE sale_date = '2023-10-27';`
2.  **Find all sales for a specific customer:**
    `SELECT * FROM sales WHERE customer_id = 12345;`
3.  **Find sales for a specific product on a specific date:**
    `SELECT * FROM sales WHERE sale_date = '2023-10-27' AND product_id = 987;`

### Choosing a Compound Sort Key

If `sale_date` is the most frequently filtered column, it's a good candidate for the first column in a compound sort key. If queries often filter by both `sale_date` and `customer_id`, then `(sale_date, customer_id)` would be a strong compound sort key. This allows Redshift to efficiently locate data for specific dates, and then within those dates, for specific customers.

```sql
CREATE TABLE sales (
    sale_id BIGINT,
    sale_date DATE,
    customer_id INT,
    product_id INT,
    quantity INT,
    price DECIMAL(10, 2)
)
SORTKEY (sale_date, customer_id); -- Compound sort key
```

With this sort key, a query like `SELECT * FROM sales WHERE sale_date = '2023-10-27' AND customer_id = 12345;` will be very fast. Redshift first uses `sale_date` to narrow down the blocks, and then `customer_id` to further refine the search within those blocks.

### When to Consider Interleaved Sort Keys

If your queries frequently filter on `customer_id` alone, or `product_id` alone, and not always in conjunction with `sale_date`, an interleaved sort key on `(customer_id, sale_date, product_id)` might offer benefits. However, interleaved sort keys are generally recommended for a small number of columns (typically fewer than 8) and when the query patterns are highly variable across those columns. For most common filtering scenarios on large fact tables, compound sort keys often provide superior performance.

## Practice Task

Consider a `web_logs` table with columns like `log_timestamp` (TIMESTAMP), `user_id` (INT), `page_url` (VARCHAR), and `ip_address` (VARCHAR).

1.  What are the two most common query patterns you might expect for this table?
2.  Based on those patterns, propose a suitable sort key (compound or interleaved) for the `web_logs` table. Explain your reasoning.

## Self-Check Questions

1.  What is the primary benefit of using a sort key in Amazon Redshift?
2.  In which scenario would a compound sort key be more beneficial than an interleaved sort key?
3.  Why is the order of columns important in a compound sort key?

## Supports

- [[skills/computing/data-ai/data-engineering-platforms/amazon-redshift/microskills/sort-strategy|Sort Strategy]]
