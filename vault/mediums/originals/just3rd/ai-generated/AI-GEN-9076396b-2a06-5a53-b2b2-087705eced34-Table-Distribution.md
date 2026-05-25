---
type: "medium"
title: "Redshift Table Distribution: Optimizing Joins and Scans"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/data-ai/data-engineering-platforms/amazon-redshift/microskills/table-distribution|table-distribution]]"
learning-time-in-minutes: 3
---
# Redshift Table Distribution: Optimizing Joins and Scans

Choosing how your data is distributed across your Amazon Redshift cluster is crucial for query performance. This micro-skill focuses on selecting the right distribution style to speed up joins and scans, directly impacting the efficiency of your Redshift queries.

## Understanding Distribution Styles

Redshift distributes table data across compute nodes. The distribution style dictates how rows are mapped to nodes. The primary styles are:

*   **KEY:** Rows are distributed based on the values in a designated distribution key (DISTKEY). Rows with the same DISTKEY value are located on the same node. This is excellent for joins where tables share the same join key, as the join can happen locally on each node, avoiding data movement.
*   **ALL:** A full copy of the table is present on every node. This is ideal for small, frequently joined dimension tables. Queries can join the dimension table without moving data, as it's already available on each node.
*   **EVEN:** Rows are distributed in a round-robin fashion across all nodes. This is the default and a good general-purpose option when no clear join or dimension relationship exists, or for staging tables.

## Practical Example: Optimizing a Sales Data Warehouse

Imagine you have two tables in your Redshift data warehouse:

1.  `sales`: A large fact table containing millions of sales transactions.
2.  `products`: A smaller dimension table containing product details.

You frequently query sales data, joining it with product information to analyze sales by product category.

### Scenario 1: Poor Distribution

If both `sales` and `products` are `EVEN` distributed, when you join them on `product_id`:

```sql
SELECT
    p.product_name,
    SUM(s.sale_amount) AS total_sales
FROM
    sales s
JOIN
    products p ON s.product_id = p.product_id
GROUP BY
    p.product_name;
```

Redshift will have to move `products` rows across the network to match them with `sales` rows on each node. This data shuffling is expensive and slows down the query.

### Scenario 2: Optimized Distribution

To optimize this join, you should:

*   Distribute the `sales` table using `KEY` on `product_id`.
*   Distribute the `products` table using `ALL`.

This setup ensures that all sales records for a given `product_id` reside on the same node as the corresponding `product` record. The join then happens locally on each node, drastically reducing network traffic and improving query speed.

**Creating Tables with Distribution Styles:**

```sql
CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(255),
    category VARCHAR(100)
)
DISTSTYLE ALL; -- Distribute a copy to all nodes

CREATE TABLE sales (
    sale_id BIGINT IDENTITY(0,1),
    product_id INT,
    sale_date DATE,
    sale_amount DECIMAL(10, 2)
)
DISTKEY (product_id); -- Distribute based on product_id
```

## Practice Task

Consider a scenario with `orders` (large fact table) and `customers` (dimension table). You frequently join these tables to analyze order volume by customer region.

1.  Which distribution style would you choose for the `orders` table and why?
2.  Which distribution style would you choose for the `customers` table and why?
3.  Write the `CREATE TABLE` statements for both `orders` and `customers` reflecting your choices. Assume `orders` has a `customer_id` column and `customers` has a `customer_id` column and a `region` column.

## Self-Check Questions

1.  When is the `ALL` distribution style most beneficial?
2.  What type of join performance is significantly improved by using `DISTKEY`?
3.  What is the default distribution style in Redshift, and when might it be a reasonable choice?

## Supports

- [[skills/computing/data-ai/data-engineering-platforms/amazon-redshift/microskills/table-distribution|Table Distribution]]
