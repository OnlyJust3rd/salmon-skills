---
type: "medium"
title: "Data Transformation: Reshaping Your Data"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/data-ai/data-engineering-platforms/data-engineering/microskills/transformation|transformation]]"
learning-time-in-minutes: 4
---
# Data Transformation: Reshaping Your Data

In Data Engineering, a data pipeline is a series of steps that move and process data. One crucial step in this process is **Transformation**. This is where we change the data's shape, format, or meaning to make it ready for analysis or other downstream uses. Think of it like preparing ingredients before cooking – you chop vegetables, measure spices, and combine things in a specific order.

## Why Transform Data?

Raw data is rarely perfect. It might be:

*   **Inconsistent:** Names spelled differently, dates in various formats.
*   **Incomplete:** Missing values.
*   **Incompatible:** Data types that don't match what your tools expect.
*   **Too complex:** Nested structures that need flattening.
*   **Not in the right format:** For example, needing to convert units or aggregate values.

Transformation addresses these issues, making data clean, consistent, and usable.

## Practical Example: Customer Data Cleanup

Imagine you're building a pipeline for customer analytics. Your source data might look like this (simplified):

| CustomerID | Name        | SignUpDate  | LastPurchaseAmount | City      |
| :--------- | :---------- | :---------- | :----------------- | :-------- |
| 101        | Alice Smith | 2023-01-15  | 55.20              | New York  |
| 102        | Bob Johnson | 03/10/2023  | 120.00             | chicago   |
| 103        | Alice Smith | 2023-02-20  | 75.50              | New York  |
| 104        | Charlie Brown | 2023-01-15 | 30.00              | Los Angeles |

Let's identify transformation needs:

1.  **Date Format:** `SignUpDate` has two formats (`YYYY-MM-DD` and `MM/DD/YYYY`). We need to standardize this.
2.  **Case Consistency:** `City` is inconsistently capitalized (`New York`, `chicago`). We should make it all lowercase or title case.
3.  **Duplicate Records:** Customer ID 101 and 103 have the same name and city, but different signup dates and purchase amounts. This might indicate a duplicate entry, or it might be valid. For this exercise, let's assume we want to keep the *latest* record for a given customer name if there are duplicates, or perhaps aggregate purchase amounts. For simplicity, let's aim to get a unique customer list with their *most recent* signup date and *total* purchase amount.
4.  **Data Type:** `LastPurchaseAmount` is likely a number, which is good, but if it were a string, we'd need to convert it.

### Transformation Steps (Conceptual):

Here's how we might transform this data:

1.  **Standardize Dates:** Convert all `SignUpDate` entries to a single format, like `YYYY-MM-DD`.
2.  **Normalize Case:** Convert all entries in the `City` column to lowercase.
3.  **Handle Duplicates/Aggregate:** This is more complex. A common approach is to:
    *   Group records by `Name`.
    *   For each group, find the maximum `SignUpDate`.
    *   For each group, sum the `LastPurchaseAmount`.
    *   Select unique names.

After these transformations, our data might look like this:

| Name          | SignUpDate | TotalPurchaseAmount | City        |
| :------------ | :--------- | :------------------ | :---------- |
| alice smith   | 2023-02-20 | 130.70              | new york    |
| bob johnson   | 2023-03-10 | 120.00              | chicago     |
| charlie brown | 2023-01-15 | 30.00               | los angeles |

Notice how "Alice Smith" now has a consolidated purchase history and the latest signup date, and all cities are in lowercase.

## Practice Task

Consider the following raw data from an online store:

| OrderID | Product       | Price | OrderDate   | CustomerEmail     | ShippingStatus |
| :------ | :------------ | :---- | :---------- | :---------------- | :------------- |
| 5001    | Widget A      | 19.99 | 2023-04-01  | user@example.com  | Shipped        |
| 5002    | Gadget B      | 45.00 | 04/01/2023  | another@test.net  | Processing     |
| 5003    | Widget A      | 19.99 | 2023-04-02  | user@example.com  | Shipped        |
| 5004    | Doodad C      | 9.50  | 2023-04-02  | unique@domain.org | Shipped        |
| 5005    | Gadget B      | 45.00 | 04/03/2023  | another@test.net  | Shipped        |

Your task is to outline the transformation steps needed to:

1.  Standardize the `OrderDate` to `YYYY-MM-DD` format.
2.  Ensure `Price` is a numerical data type.
3.  Create a new column called `OrderStatus` where:
    *   If `ShippingStatus` is "Shipped", `OrderStatus` is "Completed".
    *   If `ShippingStatus` is "Processing", `OrderStatus` is "Pending".
4.  Aggregate the data to show the total spending per `CustomerEmail` and the count of orders for each customer.

## Self-Check Questions

1.  What is the primary goal of data transformation in a pipeline?
2.  Why is it important to standardize date formats?
3.  If you have product prices stored as strings (e.g., "$19.99"), what transformation would you need to apply before calculating total sales?
4.  What is the difference between changing the *format* of data and changing its *meaning* during transformation?

## Supports

- [[skills/computing/data-ai/data-engineering-platforms/data-engineering/microskills/transformation|Transformation]]
