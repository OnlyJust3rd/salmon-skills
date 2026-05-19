---
type: "medium"
title: "Writing Transformed Data to a Target Store"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/data/data-platforms/data-engineering/microskills/pipeline-output|Pipeline Output]]"
---
# Writing Transformed Data to a Target Store

In the process of building data pipelines, after transforming raw data, the next crucial step is to persist this processed information. This involves writing the transformed data to a designated target store. This target can be a data warehouse, a data lake, a relational database, or even a file system, depending on the downstream use cases. Successfully writing to these stores ensures that the valuable insights derived from the data are accessible for analysis, reporting, and other applications.

## Practical Scenario: Customer Order Enrichment

Imagine you're working on a data engineering task to process customer orders. Your batch pipeline has already:
1.  **Ingested** raw order data from an e-commerce platform.
2.  **Transformed** it by:
    *   Calculating the total order value.
    *   Enriching product details using a separate product catalog.
    *   Standardizing customer addresses.

Now, the transformed data, containing enriched order details, needs to be stored for the business intelligence team to analyze sales trends and customer purchasing behavior.

### Writing to a Data Warehouse (Example using SQL)

A common target for this type of processed data is a data warehouse. Let's assume your transformed data is in a structured format (e.g., a Pandas DataFrame or a list of dictionaries) and you want to load it into a table named `enriched_orders` in a PostgreSQL data warehouse.

Here's a conceptual SQL `INSERT` statement:

```sql
INSERT INTO enriched_orders (order_id, customer_id, order_date, total_amount, product_id, product_name, customer_name, shipping_address)
VALUES
    (101, 505, '2023-10-27', 150.75, 20, 'Laptop', 'Alice Smith', '123 Main St, Anytown'),
    (102, 506, '2023-10-27', 45.50, 30, 'Keyboard', 'Bob Johnson', '456 Oak Ave, Otherville');
-- ... and so on for each transformed record
```

In a real-world pipeline, you would typically use a data loading tool or a programming library (like `psycopg2` for Python with PostgreSQL) to programmatically execute these inserts, often in batches to optimize performance.

### Writing to a Data Lake (Example using Parquet files)

If your target is a data lake, you might store the transformed data in a more flexible format like Parquet, often in cloud storage like Amazon S3 or Azure Data Lake Storage.

Using Python with the `pandas` and `pyarrow` libraries, you could achieve this like so:

```python
import pandas as pd
import pyarrow.parquet as pq

# Assume 'transformed_data_df' is your Pandas DataFrame
# Example DataFrame:
data = {
    'order_id': [101, 102],
    'customer_id': [505, 506],
    'order_date': ['2023-10-27', '2023-10-27'],
    'total_amount': [150.75, 45.50],
    'product_id': [20, 30],
    'product_name': ['Laptop', 'Keyboard'],
    'customer_name': ['Alice Smith', 'Bob Johnson'],
    'shipping_address': ['123 Main St, Anytown', '456 Oak Ave, Otherville']
}
transformed_data_df = pd.DataFrame(data)

# Define the path to your target storage
output_path = "s3://your-data-lake-bucket/processed_orders/2023/10/27/orders.parquet" # Example for S3

# Write the DataFrame to Parquet format
transformed_data_df.to_parquet(output_path, engine='pyarrow')

print(f"Transformed data written to {output_path}")
```

This approach is common for large datasets as Parquet is a columnar storage format optimized for analytical queries and compression.

## Practice Task

Given the following Python dictionary representing transformed product review data:

```python
transformed_reviews = [
    {"review_id": "r1", "product_id": "p10", "user_id": "u1", "rating": 5, "sentiment": "positive", "processed_text": "Amazing product, highly recommend!"},
    {"review_id": "r2", "product_id": "p12", "user_id": "u2", "rating": 3, "sentiment": "neutral", "processed_text": "It's okay, nothing special."}
]
```

Your task is to write this data to a CSV file named `processed_reviews.csv` in your local filesystem.

## Self-Check Questions

1.  What is the primary purpose of writing transformed data to a target store in a batch data pipeline?
2.  When might you choose to write data to a data warehouse versus a data lake?
3.  What are the benefits of using a columnar storage format like Parquet for data lake storage?
4.  What potential issues could arise if the connection to the target store is lost during the writing process?

## Supports

- [[skills/data/data-platforms/data-engineering/microskills/pipeline-output|Pipeline Output]]
