---
type: "medium"
title: "Distributed Join in Spark DataFrames"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/data-ai/data-engineering-platforms/apache-spark/microskills/distributed-join|distributed-join]]"
learning-time-in-minutes: 2
---
# Distributed Join in Spark DataFrames

This lesson focuses on applying Spark DataFrame transformation concepts, specifically the **Distributed Join** operation. Understanding how to combine datasets that are spread across a cluster is crucial for efficient data processing with Apache Spark.

### What is a Distributed Join?

In Spark, a DataFrame is often partitioned across multiple nodes in a cluster. A distributed join is the process of combining two or more DataFrames by matching rows based on common columns, where the DataFrames themselves are distributed across the cluster. Spark handles the complexities of shuffling and merging data from different partitions to perform the join.

### Practical Example: Joining Customer and Order Data

Imagine you have two large datasets: `customers` and `orders`.
*   `customers` DataFrame: Contains customer ID, name, and location.
*   `orders` DataFrame: Contains order ID, customer ID, and order amount.

Both DataFrames are distributed across your Spark cluster. To find out which customers placed which orders, you need to join these two DataFrames on the `customer_id` column.

Here's how you might perform this join in PySpark:

```python
from pyspark.sql import SparkSession
from pyspark.sql.functions import col

spark = SparkSession.builder.appName("DistributedJoinExample").getOrCreate()

# Assume you have loaded your customer and order data into these DataFrames
# For demonstration, let's create sample DataFrames
customers_data = [(1, "Alice", "New York"), (2, "Bob", "London"), (3, "Charlie", "Paris")]
customers_df = spark.createDataFrame(customers_data, ["customer_id", "name", "location"])

orders_data = [(101, 1, 150.0), (102, 2, 200.0), (103, 1, 50.0), (104, 3, 300.0)]
orders_df = spark.createDataFrame(orders_data, ["order_id", "customer_id", "amount"])

# Perform the join operation
joined_df = customers_df.join(orders_df, customers_df.customer_id == orders_df.customer_id, "inner")

# Select and display the relevant columns
joined_df.select("customer_id", "name", "order_id", "amount").show()

spark.stop()
```

In this example:
*   `customers_df.join(orders_df, ...)` initiates the join.
*   `customers_df.customer_id == orders_df.customer_id` specifies the join condition.
*   `"inner"` indicates an inner join, meaning only rows with matching `customer_id` in both DataFrames will be included.

Spark will intelligently distribute the join operation across the cluster, shuffling data only as needed to bring matching records together efficiently.

### Practice Task

Consider two more distributed DataFrames: `products` (with `product_id`, `product_name`, `category`) and `sales` (with `sale_id`, `product_id`, `quantity`). Write Spark code to create a DataFrame that shows the `product_name` and `quantity` for each sale.

### Self-Check Questions

1.  What is the primary purpose of a distributed join in Spark?
2.  What are the potential performance implications if the join key has a highly skewed distribution?
3.  Besides `"inner"`, what are other common join types in Spark, and what do they do?

## Supports

- [[skills/computing/data-ai/data-engineering-platforms/apache-spark/microskills/distributed-join|Distributed Join]]
