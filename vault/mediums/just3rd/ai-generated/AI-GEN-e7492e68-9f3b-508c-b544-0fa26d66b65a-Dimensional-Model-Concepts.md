---
type: "medium"
title: "Dimensional Model Concepts"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/data/data-platforms/data-modeling/microskills/dimensional-model-concepts|dimensional-model-concepts]]"
---
# Dimensional Model Concepts

Dimensional modeling is a data modeling technique optimized for data warehousing and business intelligence. Its primary goal is to make it easy and fast for users to query and analyze data, particularly for reporting and decision-making. Unlike highly normalized relational models, dimensional models prioritize read performance and understandability.

## Core Concepts

The dimensional model is built around two fundamental types of tables:

*   **Fact Tables:** These tables contain the quantitative measurements (the "facts") that represent business events. They are typically very large and grow rapidly. Each row in a fact table represents a single business event or transaction. Fact tables contain:
    *   **Measures:** Numerical values that can be aggregated (e.g., sales amount, quantity sold, profit).
    *   **Foreign Keys:** These keys link to dimension tables.

*   **Dimension Tables:** These tables contain the descriptive attributes that provide context to the facts. They describe "who," "what," "where," "when," "why," and "how" of the business events. Dimension tables are typically smaller than fact tables and have a more stable structure. Each row in a dimension table represents a unique descriptive entity. Dimension tables contain:
    *   **Primary Key:** A unique identifier for each record.
    *   **Attributes:** Descriptive columns (e.g., product name, customer city, date hierarchy).

### The Star Schema

The most common structure for a dimensional model is the **star schema**. It's called a "star schema" because the fact table is at the center, and it's surrounded by multiple dimension tables, resembling a star.

```
     +-----------------+
     |   Dim_Product   |
     +-----------------+
     | Product_Key (PK)|
     | Product_Name    |
     | Category        |
     +-------+---------+
             |
             | Foreign Key (Product_Key)
             |
+------------+------------+     +-----------------+
|      Fact_Sales         |-----|    Dim_Customer |
+-------------------------+     +-----------------+
| Order_Date_Key (FK)     |     | Customer_Key (PK)|
| Product_Key (FK)        |     | Customer_Name   |
| Customer_Key (FK)       |     | City            |
| Store_Key (FK)          |     | Region          |
| Sales_Amount (Measure)  |     +-----------------+
| Quantity_Sold (Measure) |
+-------------------------+
             |
             | Foreign Key (Store_Key)
             |
     +-----------------+
     |    Dim_Store    |
     +-----------------+
     | Store_Key (PK)  |
     | Store_Name      |
     | Store_Manager   |
     +-----------------+
```

In this example:

*   `Fact_Sales` is the fact table, containing measures like `Sales_Amount` and `Quantity_Sold`.
*   `Dim_Product`, `Dim_Customer`, and `Dim_Store` are dimension tables, providing context about the products sold, the customers who bought them, and the stores where the sales occurred.
*   The `Fact_Sales` table uses foreign keys (e.g., `Product_Key`, `Customer_Key`, `Store_Key`) to link to the primary keys of the dimension tables.

## Use Cases

Dimensional models are ideal for:

*   **Reporting and Dashboards:** Quickly generating reports on sales performance, customer behavior, inventory levels, etc.
*   **Ad-hoc Analysis:** Allowing business users to explore data and answer their own questions without complex SQL.
*   **Business Intelligence Tools:** Powering tools like Tableau, Power BI, and Looker for interactive data visualization.

## Practice Task

Imagine you are building a dimensional model for a streaming service.

1.  Identify the key business events (facts) you would want to measure.
2.  For each fact, brainstorm the descriptive attributes (dimensions) that would provide context.
3.  Sketch out a star schema diagram showing your fact table and a few dimension tables.

## Self-Check Questions

*   What is the primary purpose of a dimensional model?
*   What are the two main types of tables in a dimensional model, and what kind of data do they hold?
*   In a star schema, what table is at the center, and what surrounds it?
*   Why are dimension tables typically smaller and more stable than fact tables?
*   Give one example of a measure and one example of an attribute you might find in a dimensional model.

## Supports

- [[skills/data/data-platforms/data-modeling/microskills/dimensional-model-concepts|Dimensional Model Concepts]]
