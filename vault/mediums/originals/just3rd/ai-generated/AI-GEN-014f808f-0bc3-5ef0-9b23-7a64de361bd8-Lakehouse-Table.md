---
type: "medium"
title: "Managing Lakehouse Tables"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/data-ai/data-engineering-platforms/databricks/microskills/lakehouse-table|lakehouse-table]]"
learning-time-in-minutes: 3
---
# Managing Lakehouse Tables

This lesson focuses on how to effectively manage analytical tables built on top of your data lake storage within Databricks. Understanding this is key to building efficient and scalable data workflows.

## What are Lakehouse Tables?

Traditionally, data warehouses and data lakes operated separately. Data warehouses were structured and performant but expensive and inflexible. Data lakes were cheap and flexible but lacked structure and performance for analytics.

The Databricks Lakehouse merges these worlds. It allows you to treat your data lake (like cloud object storage) as a high-performance, transactional data warehouse. Lakehouse tables are essentially structured tables that overlay your raw data files in the lake. They provide ACID (Atomicity, Consistency, Isolation, Durability) transactions, schema enforcement, and query optimization, making your data accessible and reliable for analytical workloads directly from your Databricks notebooks and other tools.

The core technology enabling this in Databricks is Delta Lake. Delta Lake is an open-source storage layer that brings reliability to data lakes. When you create a table using Delta Lake, you're creating a Lakehouse table.

## Practical Application: Creating and Querying a Lakehouse Table

Let's walk through a common scenario: creating a table from some raw CSV data and then querying it.

Imagine you have a CSV file named `sales_data.csv` in your Databricks file system (DBFS) or cloud storage, containing sales records.

**Scenario:** You've ingested customer sales data into a CSV file and need to analyze it.

**Steps:**

1.  **Load Data into a DataFrame:** First, you'll read the CSV data into a Spark DataFrame within a Databricks notebook.

    ```python
    # Assuming your CSV is at '/FileStore/tables/sales_data.csv'
    sales_df = spark.read.format("csv") \
      .option("header", "true") \
      .option("inferSchema", "true") \
      .load("/FileStore/tables/sales_data.csv")

    sales_df.display()
    ```

2.  **Create a Lakehouse Table (using Delta Lake):** You can then save this DataFrame as a Delta table. Databricks makes this very straightforward.

    ```python
    # Specify a location for your Delta table (e.g., in DBFS)
    delta_table_path = "/mnt/lakehouse/sales_data_delta"

    # Save the DataFrame as a Delta table
    sales_df.write.format("delta").mode("overwrite").save(delta_table_path)

    print(f"Delta table saved to: {delta_table_path}")
    ```

    *   `format("delta")`: This tells Spark to use the Delta Lake format.
    *   `mode("overwrite")`: This will replace the table if it already exists. Other modes include `append` and `errorifexists`.
    *   `save(delta_table_path)`: This writes the data and the Delta transaction log to the specified path.

3.  **Register the Table in the Metastore (Optional but Recommended):** For easier querying and management, you can register this Delta table in Databricks' metastore (which typically uses Hive Metastore or Unity Catalog).

    ```python
    # Register as a managed table (Databricks manages metadata)
    spark.sql(f"CREATE TABLE sales_data USING DELTA LOCATION '{delta_table_path}'")

    print("Delta table registered in the metastore.")
    ```
    This allows you to query the table using standard SQL.

4.  **Query the Lakehouse Table:** Now you can query your data using SQL or the DataFrame API, leveraging the performance benefits of Delta Lake.

    ```python
    # Query using SQL
    display(spark.sql("SELECT * FROM sales_data LIMIT 10"))

    # Query using DataFrame API
    display(spark.table("sales_data").filter("TotalAmount > 100"))
    ```

## Practice Task

1.  Create a simple DataFrame with a few columns (e.g., `product_id`, `quantity`, `price`).
2.  Save this DataFrame as a Delta Lake table to a location of your choice.
3.  Register this table in the Databricks metastore.
4.  Write a SQL query to select all rows from your newly created table.

## Self-Check Questions

*   What is the primary benefit of using Delta Lake for your data lake tables?
*   What does the `mode("overwrite")` option do when saving a Delta table?
*   Why is registering a Delta table in the metastore useful?
*   How can you query a Delta table once it's been created and registered?

## Supports

- [[skills/computing/data-ai/data-engineering-platforms/databricks/microskills/lakehouse-table|Lakehouse Table]]
