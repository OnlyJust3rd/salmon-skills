---
type: "medium"
title: "Dimension Tables in Data Warehousing"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/data/data-platforms/data-warehousing/microskills/dimension-table|dimension-table]]"
---
# Dimension Tables in Data Warehousing

Dimension tables provide the context for the data in your fact tables. Think of them as the "who, what, where, when, why, and how" of your business events. They store descriptive attributes that allow you to slice, dice, and analyze your business metrics in meaningful ways.

## What is a Dimension Table?

In data warehousing, a dimension table is a table that contains descriptive attributes about the data in a fact table. These attributes are used for querying and filtering the facts. For example, if you have a fact table storing sales transactions, the dimension tables might include:

*   **Customer Dimension:** Stores information about your customers (name, address, demographics, loyalty status).
*   **Product Dimension:** Stores information about your products (name, category, brand, SKU).
*   **Date Dimension:** Stores information about dates (day, month, year, quarter, day of the week, holiday flags).
*   **Store Dimension:** Stores information about your retail stores (name, location, region, manager).

Each row in a dimension table represents a single attribute value or a combination of attribute values. The primary key of a dimension table is typically a surrogate key, which is a unique, system-generated identifier. This surrogate key is then used as a foreign key in the fact table to link the facts to their corresponding dimensions.

## Why Use Dimension Tables?

*   **Enables Descriptive Analysis:** They allow you to analyze measures (facts) by different business perspectives (dimensions). For example, "What were the total sales by product category in Q3 of last year?"
*   **Reduces Data Redundancy:** Instead of repeating descriptive information (like a product name) multiple times in a fact table, it's stored once in the dimension table and linked via a key.
*   **Improves Query Performance:** Denormalized dimension tables are easier and faster for analytical queries to process compared to highly normalized transactional tables.
*   **Supports Slowly Changing Dimensions (SCDs):** Dimension tables are designed to handle changes in attribute values over time, allowing you to track historical changes in your business context.

## Practical Scenario: Online Retail Sales

Imagine you are building a data warehouse for an online retail company. Your primary goal is to understand sales performance.

**Fact Table: `FactSales`**

This table would store the core transactional data:

| `SaleKey` (PK) | `DateKey` (FK) | `ProductKey` (FK) | `CustomerKey` (FK) | `QuantitySold` | `UnitPrice` | `TotalSaleAmount` |
| :------------- | :------------- | :---------------- | :----------------- | :------------- | :---------- | :---------------- |
| 1001           | 20230115       | 501               | 8001               | 2              | 25.00       | 50.00             |
| 1002           | 20230115       | 505               | 8001               | 1              | 120.00      | 120.00            |
| 1003           | 20230116       | 501               | 8002               | 3              | 25.00       | 75.00             |

**Dimension Tables:**

1.  **`DimDate`** (Linked by `DateKey`)

    | `DateKey` (PK) | `FullDate`   | `DayOfWeek` | `MonthName` | `Quarter` | `Year` | `IsHoliday` |
    | :------------- | :----------- | :---------- | :---------- | :-------- | :----- | :---------- |
    | 20230115       | 2023-01-15   | Sunday      | January     | Q1        | 2023   | No          |
    | 20230116       | 2023-01-16   | Monday      | January     | Q1        | 2023   | No          |

2.  **`DimProduct`** (Linked by `ProductKey`)

    | `ProductKey` (PK) | `ProductName` | `ProductCategory` | `ProductBrand` | `SKU`   |
    | :---------------- | :------------ | :---------------- | :------------- | :------ |
    | 501               | T-Shirt       | Apparel           | BrandX         | T101    |
    | 505               | Smart Watch   | Electronics       | BrandY         | SW200   |

3.  **`DimCustomer`** (Linked by `CustomerKey`)

    | `CustomerKey` (PK) | `CustomerName` | `CustomerCity` | `CustomerSegment` |
    | :----------------- | :------------- | :------------- | :---------------- |
    | 8001               | Alice Smith    | New York       | Premium           |
    | 8002               | Bob Johnson    | Los Angeles    | Standard          |

Using these tables, you could ask queries like:

*   "Show me the total `TotalSaleAmount` for each `ProductCategory`." (Requires joining `FactSales` with `DimProduct`)
*   "What was the total `TotalSaleAmount` in `CustomerCity` for `Year` 2023?" (Requires joining `FactSales` with `DimCustomer` and `DimDate`)

## Practice Task

Consider a data warehouse for a library. Identify at least three dimension tables you would create to analyze book borrowing patterns. For each dimension table, list at least three descriptive attributes it would contain.

## Self-Check Questions

1.  What is the primary purpose of a dimension table?
2.  Give an example of a fact that would be stored in a fact table and three corresponding dimensions.
3.  Why is it beneficial to use surrogate keys in dimension tables?
4.  How do dimension tables help in understanding business performance?

## Supports

- [[skills/data/data-platforms/data-warehousing/microskills/dimension-table|Dimension Table]]
