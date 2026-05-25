---
type: "medium"
title: "Spark Transformations: Shaping Your Data"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/data-ai/data-engineering-platforms/apache-spark/microskills/spark-transformation|spark-transformation]]"
learning-time-in-minutes: 2
---
# Spark Transformations: Shaping Your Data

In Apache Spark, transformations are operations that create a new distributed dataset from an existing one. Unlike actions, transformations are *lazy*, meaning they don't compute results immediately. Instead, Spark builds a logical plan (a Directed Acyclic Graph or DAG) of these transformations, which is then executed when an action is called. This lazy evaluation allows Spark to optimize the execution plan for efficiency.

Think of transformations as instructions for how to reshape or derive new data from your initial dataset. You're defining *what* you want to do, not *when* to do it.

## Practical Example: Filtering and Selecting Customer Data

Let's say you have a DataFrame of customer orders, and you want to find all orders placed by customers in "California" and then select only their "order_id" and "amount".

Here's how you can apply Spark transformations:

```python
from pyspark.sql import SparkSession

# Initialize SparkSession
spark = SparkSession.builder.appName("SparkTransformations").getOrCreate()

# Sample data for demonstration
data = [("101", "Alice", "California", 150.0),
        ("102", "Bob", "New York", 200.0),
        ("103", "Charlie", "California", 75.0),
        ("104", "David", "Texas", 120.0),
        ("105", "Eve", "California", 300.0)]

columns = ["order_id", "customer_name", "state", "amount"]

# Create a Spark DataFrame
orders_df = spark.createDataFrame(data, columns)

# Transformation 1: Filter for customers in California
california_orders = orders_df.filter(orders_df.state == "California")

# Transformation 2: Select specific columns
california_customer_details = california_orders.select("order_id", "amount")

# At this point, no computation has happened. Spark has built a plan.

# Action: Show the results
california_customer_details.show()

# Output:
# +--------+------+
# |order_id|amount|
# +--------+------+
# |     101| 150.0|
# |     103|  75.0|
# |     105| 300.0|
# +--------+------+

# Stop SparkSession
spark.stop()
```

In this example:
*   `.filter(orders_df.state == "California")` is a transformation that creates a *new* DataFrame containing only rows where the `state` column is "California".
*   `.select("order_id", "amount")` is another transformation that creates a *new* DataFrame with only the `order_id` and `amount` columns from the previously filtered DataFrame.

The `.show()` method is an *action* that triggers the execution of the entire transformation DAG.

## Practice Task

Imagine you have a DataFrame of product sales with columns: `product_id`, `category`, `price`, and `quantity_sold`.

1.  Create a new DataFrame that contains only products from the "Electronics" category.
2.  From this "Electronics" DataFrame, create another DataFrame that includes only the `product_id` and the `price` of each product.
3.  Use an action to display the resulting DataFrame.

## Self-Check Questions

1.  What is the key characteristic of Spark transformations that differentiates them from actions?
2.  If you apply `.filter()` and then `.select()` to a DataFrame, what is Spark actually building internally before an action is called?
3.  Why is lazy evaluation a beneficial concept for Spark's performance?

## Supports

- [[skills/computing/data-ai/data-engineering-platforms/apache-spark/microskills/spark-transformation|Spark Transformation]]
