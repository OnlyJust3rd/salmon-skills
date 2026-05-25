---
type: "medium"
title: "Schema-on-Read in Data Lakes"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/data-ai/data-engineering-platforms/data-lake/microskills/schema-on-read|schema-on-read]]"
learning-time-in-minutes: 3
---
# Schema-on-Read in Data Lakes

In a data lake, raw data is stored in its original format. This offers immense flexibility. However, to make sense of this data, we need a way to interpret its structure. This is where **Schema-on-Read** comes into play.

Schema-on-Read means that the structure, or "schema," of the data is applied *when the data is queried or read*, not when it's written or ingested. Think of it like a library where books are stored without strict cataloging at the entrance. You only define how you want to find and organize information when you actually decide to read a particular book or group of books for a specific purpose.

This contrasts with traditional data warehouses, which use **Schema-on-Write**. In Schema-on-Write, data must conform to a predefined schema before it can be loaded. This ensures consistency but can be rigid and time-consuming when dealing with diverse or rapidly changing data.

## How Schema-on-Read Works

When you query data in a data lake using a schema-on-read approach, your query tool or processing engine applies a schema to the raw data files. This schema dictates:

*   **Data Types:** What kind of data to expect (e.g., integers, strings, dates).
*   **Column Names:** What to call each piece of information.
*   **Relationships:** How different pieces of data relate to each other (though this is often more implicit and handled by the query logic).

The key benefit is that you can land data of any format (CSV, JSON, Parquet, XML, logs, etc.) into your data lake without upfront transformations. The structure is then defined by the specific analytical need at the time of access.

## Practical Scenario

Imagine a retail company collecting sales data from various sources:

1.  **Online Store:** Logs in JSON format, detailing customer ID, product ID, quantity, and timestamp.
2.  **In-Store POS:** CSV files, with columns like `TransactionID`, `ItemID`, `SalePrice`, `StoreID`.
3.  **Mobile App:** Data streams in Avro format, with `UserID`, `AppEvent`, `DeviceType`.

In a data lake with schema-on-read:

*   All these files are dumped into storage (e.g., Amazon S3, Azure Data Lake Storage, Google Cloud Storage).
*   When a data analyst wants to understand "Total sales per product across all channels," they use a tool like Apache Spark or Presto.
*   The analyst's query will specify the schema needed for this analysis. For example, they might define a schema for the JSON sales logs that maps fields like `customerId` to a `UserID` column, `productId` to `ProductID`, and `quantity` to `Quantity`. They'd do similarly for the CSV and Avro data, ensuring consistent column naming for their analysis.
*   The query engine then reads the raw files, applies the defined schema on the fly, and aggregates the sales figures.

The beauty here is that new data sources or changes in existing data formats don't require complex ETL (Extract, Transform, Load) processes before data can be stored. The schema is adaptable to the query.

## Practice Task

You have a folder in your data lake containing two CSV files:

**File 1: `sales_q1.csv`**
```csv
OrderID,Item,Price
1001,Apple,0.50
1002,Banana,0.25
```

**File 2: `sales_q2.csv`**
```csv
ID,Product,Cost
2001,Orange,0.75
2002,Apple,0.55
```

Your task is to write a conceptual "query" (using pseudocode or a descriptive approach) that reads both files and produces a consolidated list of products and their prices, assuming you want to call the price column `SalePrice` and product column `ProductName`.

**Conceptual Query:**

```
SELECT
    CASE
        WHEN source_file = 'sales_q1.csv' THEN Item
        WHEN source_file = 'sales_q2.csv' THEN Product
    END AS ProductName,
    CASE
        WHEN source_file = 'sales_q1.csv' THEN Price
        WHEN source_file = 'sales_q2.csv' THEN Cost
    END AS SalePrice
FROM
    (
        SELECT *, 'sales_q1.csv' AS source_file FROM file_storage WHERE filename = 'sales_q1.csv'
        UNION ALL
        SELECT *, 'sales_q2.csv' AS source_file FROM file_storage WHERE filename = 'sales_q2.csv'
    ) AS raw_data
-- Here, the schema (ProductName, SalePrice) is applied during the SELECT statement.
-- The interpretation of 'Item'/'Product' as ProductName and 'Price'/'Cost' as SalePrice happens now.
```

## Self-Check Questions

1.  What is the core difference between Schema-on-Read and Schema-on-Write?
2.  When would you choose Schema-on-Read for your data lake storage strategy?
3.  What are the potential challenges or considerations when using Schema-on-Read?

## Supports

- [[skills/computing/data-ai/data-engineering-platforms/data-lake/microskills/schema-on-read|Schema-on-Read]]
