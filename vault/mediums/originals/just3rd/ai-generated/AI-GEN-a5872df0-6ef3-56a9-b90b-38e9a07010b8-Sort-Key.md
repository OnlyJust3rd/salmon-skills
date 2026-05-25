---
type: "medium"
title: "Understanding Sort Keys in Amazon Redshift"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/data-ai/data-engineering-platforms/amazon-redshift/microskills/sort-key|sort-key]]"
learning-time-in-minutes: 3
---
# Understanding Sort Keys in Amazon Redshift

In Amazon Redshift, the way your data is physically stored on disk can significantly impact query performance. One crucial aspect of this physical organization is the **Sort Key**. Understanding sort keys helps you optimize how Redshift retrieves and processes data, especially for analytical queries.

## What is a Sort Key?

A sort key tells Redshift how to order the rows in a table based on the values in one or more columns. When you define a sort key, Redshift physically sorts the data in each slice (a partition of your data) according to the specified columns.

Why does this matter? Many analytical queries involve filtering data (using `WHERE` clauses) or joining tables. If the data is sorted by the columns used in these operations, Redshift can scan less data and retrieve results much faster. Instead of reading through every row, it can often jump directly to the relevant blocks of data.

There are two main types of sort keys:

*   **Compound Sort Keys:** When you specify multiple columns, Redshift sorts by the first column, then by the second column for rows with the same value in the first, and so on. The order matters significantly.
*   **Interleaved Sort Keys:** Redshift sorts data across multiple columns in a round-robin fashion. This can be beneficial when queries frequently filter on different combinations of the sort key columns.

For this lesson, we'll focus on **Compound Sort Keys** as they are more common and provide a clear performance benefit when queries align with the sort order.

## Practical Scenario: Sales Data Analysis

Imagine you have a `sales` table in Redshift storing millions of sales transactions. Your common analytical queries often involve looking at sales for a specific date range or for a particular product.

Your `sales` table might look like this:

| `sale_id` | `sale_date` | `product_id` | `region` | `amount` |
| :-------- | :---------- | :----------- | :------- | :------- |
| 101       | 2023-10-26  | P500         | North    | 150.00   |
| 102       | 2023-10-26  | P600         | South    | 200.00   |
| 103       | 2023-10-27  | P500         | North    | 160.00   |
| 104       | 2023-10-27  | P700         | West     | 120.00   |

### Without a Sort Key

If you run a query like:

```sql
SELECT SUM(amount)
FROM sales
WHERE sale_date BETWEEN '2023-10-26' AND '2023-10-27';
```

Redshift would have to scan through a large portion of the table to find all records within that date range.

### With a Compound Sort Key

Now, consider defining `sale_date` as a compound sort key:

```sql
CREATE TABLE sales (
    sale_id INT,
    sale_date DATE,
    product_id VARCHAR(10),
    region VARCHAR(10),
    amount DECIMAL(10, 2)
)
DISTSTYLE EVEN -- or KEY, depending on distribution strategy
SORTKEY (sale_date);
```

With `sale_date` as the sort key, Redshift physically arranges the rows in ascending order of `sale_date`. When you run the same query as above, Redshift can efficiently locate the blocks of data corresponding to '2023-10-26' and '2023-10-27' without scanning irrelevant data.

If you frequently filter by both `sale_date` and `product_id`, you might consider a compound sort key like `SORTKEY (sale_date, product_id)`. This would further optimize queries that include conditions on both columns, sorted by date first, then by product for sales on the same date.

**Key Takeaway:** Choose sort keys based on the columns most frequently used in your `WHERE` clauses and `JOIN` conditions. The order in a compound sort key is critical.

## Practice Task

Examine the following SQL query and determine which column(s) would be the most effective for a compound sort key to improve its performance.

```sql
SELECT region, COUNT(*)
FROM orders
WHERE order_date >= '2023-01-01'
GROUP BY region;
```

Explain your reasoning.

## Self-Check Questions

1.  What is the primary benefit of using a sort key in Amazon Redshift?
2.  When using a compound sort key, what is the significance of the order of columns in the `SORTKEY` definition?
3.  If you have a table where queries frequently filter by `customer_id` and then `order_timestamp`, which of the following would be the best compound sort key: `SORTKEY (order_timestamp, customer_id)` or `SORTKEY (customer_id, order_timestamp)`? Why?

## Supports

- [[skills/computing/data-ai/data-engineering-platforms/amazon-redshift/microskills/sort-key|Sort Key]]
