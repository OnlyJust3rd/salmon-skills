---
type: "medium"
title: "Fact Tables: Capturing Business Events"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/data-ai/data-engineering-platforms/data-warehousing/microskills/fact-table|fact-table]]"
related-skills:
  - "[[skills/computing/data-ai/data-engineering-platforms/data-warehousing/data-warehousing|data-warehousing]]"
learning-time-in-minutes: 3
---
# Fact Tables: Capturing Business Events

In data warehousing, we need a way to store and analyze the core measurable business events. This is where the **fact table** comes in. Think of it as the central hub for all the numerical data that represents something important happening in your business.

### What is a Fact Table?

A fact table is a table in a data warehouse that contains the **measures** or **metrics** of a business process. These measures are typically numeric and additive (meaning they can be summed up across different dimensions). Fact tables are usually very large, as they record every instance of a business event.

Key characteristics of a fact table:

*   **Measures:** These are the quantitative values you want to analyze, such as sales amount, quantity sold, cost, profit, or clicks.
*   **Foreign Keys:** Each fact table contains foreign keys that link to dimension tables. These foreign keys allow you to slice and dice the measures by different business perspectives (e.g., by product, by customer, by date).
*   **Grain:** The grain of a fact table defines what a single row represents. For example, a sales fact table's grain could be "one row per sales transaction line item."

### Practical Example: Online Retail Sales

Let's imagine an online retail business. We want to analyze sales performance.

**Scenario:** A customer places an order. This order consists of multiple items. We want to track how much was sold, the quantity of each item, and the price.

Here's a simplified view of a `FactSales` table:

| OrderItemID | DateKey | ProductKey | CustomerKey | StoreKey | QuantitySold | UnitPrice | SalesAmount | DiscountAmount |
| :---------- | :------ | :--------- | :---------- | :------- | :----------- | :-------- | :---------- | :------------- |
| 1001        | 20231101 | 501        | 101         | 201      | 2            | 15.00     | 30.00       | 3.00           |
| 1002        | 20231101 | 502        | 101         | 201      | 1            | 45.00     | 45.00       | 0.00           |
| 1003        | 20231102 | 501        | 102         | 201      | 1            | 15.00     | 15.00       | 1.50           |
| 1004        | 20231102 | 503        | 103         | 202      | 3            | 10.00     | 30.00       | 0.00           |

**Explanation:**

*   **Measures:** `QuantitySold`, `UnitPrice`, `SalesAmount`, `DiscountAmount` are the numeric values representing the sales event.
*   **Foreign Keys:** `DateKey`, `ProductKey`, `CustomerKey`, `StoreKey` link this fact to other dimension tables (e.g., a `DimDate` table, `DimProduct` table, etc.) to provide context.
*   **Grain:** Each row represents a single line item within an order. `OrderItemID` could be a unique identifier for this level.

With this `FactSales` table, we can answer questions like:

*   What was the total `SalesAmount` for November 2023?
*   Which `ProductKey` had the highest `QuantitySold` last week?
*   What was the average `DiscountAmount` given to `CustomerKey` 101?

### Practice Task

Imagine a streaming service. What would be the measurable business events you'd want to track? Design a possible `FactStreaming` table. Consider what numeric measures would be important and what foreign keys you might need to link to dimension tables (e.g., `DimUser`, `DimContent`, `DimDate`).

### Self-Check Questions

1.  What is the primary purpose of a fact table in a data warehouse?
2.  Name at least two types of measures you might find in a fact table.
3.  Why are foreign keys important in a fact table?
4.  What does "grain" mean in the context of a fact table?

## Supports

- [[skills/computing/data-ai/data-engineering-platforms/data-warehousing/microskills/fact-table|Fact Table]]
