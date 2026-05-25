---
type: "medium"
title: "Spark Actions: Triggering Computation"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/data-ai/data-engineering-platforms/apache-spark/microskills/spark-action|spark-action]]"
learning-time-in-minutes: 2
---
# Spark Actions: Triggering Computation

In Apache Spark, DataFrames are lazy. This means that transformations like `select`, `filter`, or `groupBy` don't actually compute anything until an action is explicitly called. Actions are operations that trigger a computation and return a result to the driver program or write data to an external storage system.

Think of transformations as building a recipe step-by-step. Actions are when you finally decide to cook the meal and eat it.

## Common Spark Actions

Here are some frequently used Spark actions:

*   `count()`: Returns the number of rows in a DataFrame.
*   `collect()`: Returns all rows as a Python list or Scala array. Use with caution on large DataFrames as it can exhaust driver memory.
*   `take(n)`: Returns the first `n` rows as a list. Safer than `collect()` for exploring data.
*   `show(n)`: Displays the first `n` rows of the DataFrame in a tabular format. This is primarily for interactive exploration and debugging.
*   `write.format(...).save(...)`: Saves the DataFrame to a specified format and location (e.g., CSV, Parquet, database).

## Practical Example: Analyzing Sales Data

Let's say you have a DataFrame of sales transactions.

```python
from pyspark.sql import SparkSession

spark = SparkSession.builder.appName("SparkActionsExample").getOrCreate()

data = [("Alice", "Electronics", 1200),
        ("Bob", "Clothing", 300),
        ("Charlie", "Electronics", 800),
        ("Alice", "Clothing", 150)]

columns = ["name", "category", "amount"]
sales_df = spark.createDataFrame(data, columns)

# Transformations (lazy)
electronics_sales = sales_df.filter(sales_df.category == "Electronics")
total_sales_per_category = sales_df.groupBy("category").sum("amount")

# Actions to trigger computation and get results
print("Total number of sales transactions:")
print(sales_df.count())

print("\nFirst 2 sales transactions:")
print(sales_df.take(2))

print("\nElectronics sales details:")
electronics_sales.show() # This triggers computation for electronics_sales

print("\nTotal sales per category:")
total_sales_per_category.show() # This triggers computation for total_sales_per_category

# Example of writing data
# electronics_sales.write.format("parquet").save("path/to/electronics_sales.parquet")
```

In this example, `count()`, `take()`, and `show()` are actions. They force Spark to execute the previously defined transformations to produce the requested output. `write.format(...).save(...)` is also an action that triggers computation and writes results to disk.

## Practice Task

1.  Create a Spark DataFrame with at least 10 rows and 3 columns. Include some numerical and string data.
2.  Perform a `filter` transformation on your DataFrame to select a subset of rows based on a condition.
3.  Perform a `groupBy` transformation to aggregate data.
4.  Use the `count()`, `take(5)`, and `show()` actions to inspect the results of your transformations.
5.  (Optional) Use the `write` action to save your filtered DataFrame to a CSV file.

## Self-Check Questions

*   What is the primary difference between a Spark transformation and an action?
*   Why is it important to be cautious when using the `collect()` action on large DataFrames?
*   When would you choose `take(n)` over `collect()`?
*   What does calling `show()` on a DataFrame actually cause Spark to do?

## Supports

- [[skills/computing/data-ai/data-engineering-platforms/apache-spark/microskills/spark-action|Spark Action]]
