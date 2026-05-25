---
type: "medium"
title: "Data Ingestion: The Entry Point of Your Data Pipeline"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/data-ai/data-engineering-platforms/data-engineering/microskills/data-ingestion|data-ingestion]]"
related-skills:
  - "[[skills/computing/data-ai/data-engineering-platforms/data-engineering/data-engineering|data-engineering]]"
learning-time-in-minutes: 3
---
# Data Ingestion: The Entry Point of Your Data Pipeline

Data ingestion is the very first step in any data pipeline. It's all about getting data from its original source and bringing it into a system where it can be processed, transformed, and analyzed. Think of it as loading raw ingredients into your kitchen before you start cooking.

## What is Data Ingestion?

Data ingestion is the process of bringing data from various source systems into a data pipeline. These sources can be incredibly diverse: databases, APIs, flat files (like CSV or JSON), streaming services (like sensor data or website clickstreams), and more. The goal is to make this raw data accessible for subsequent stages of the data pipeline.

### Key Concepts:

*   **Sources:** Where the data originates (databases, APIs, files, streams).
*   **Destinations:** Where the data is brought to within the pipeline (e.g., a data lake, a staging database, a message queue).
*   **Methods:** How data is moved (batch, streaming, micro-batch).
*   **Frequency:** How often data is ingested (real-time, near real-time, hourly, daily).

## Practical Scenario: E-commerce Sales Data

Imagine you work for an e-commerce company. You need to build a data pipeline to analyze sales performance.

**Data Sources:**

1.  **Relational Database (PostgreSQL):** Contains detailed order information (customer ID, product ID, quantity, price, order date).
2.  **Website Clickstream Logs (JSON files):** Records user interactions on the website (page views, add-to-cart events, search queries). These logs are generated continuously.
3.  **External Payment Gateway API:** Provides transaction status and details for completed orders.

**The Data Ingestion Challenge:**

Your task is to ingest data from these disparate sources into a central location (like a data lake) for further analysis.

**Ingestion Strategies:**

*   **For the PostgreSQL Database:**
    *   **Method:** Batch ingestion.
    *   **Frequency:** Daily.
    *   **How:** A scheduled job (e.g., using Apache Airflow or a cloud scheduler) will run a SQL query to extract new orders placed since the last ingestion and load them into a staging area in the data lake.

*   **For the Website Clickstream Logs:**
    *   **Method:** Streaming ingestion.
    *   **Frequency:** Near real-time.
    *   **How:** A streaming ingestion tool (like Apache Kafka or AWS Kinesis) will capture the JSON log files as they are generated and continuously send them to a streaming data platform within your data lake.

*   **For the Payment Gateway API:**
    *   **Method:** API polling (a form of batch).
    *   **Frequency:** Hourly.
    *   **How:** A script will periodically call the payment gateway's API to fetch the latest transaction statuses for orders that have been processed in the database and add this information to the ingested order data.

## Practice Task: Ingesting Customer Feedback

Consider a scenario where a company wants to analyze customer feedback. The feedback comes from two sources:

1.  **A CSV file:** Containing survey responses submitted weekly.
2.  **A dedicated feedback email inbox:** Where customers send their comments.

Describe a data ingestion strategy for bringing this feedback into a data pipeline. What methods would you use for each source? What would be the approximate frequency of ingestion for each?

## Self-Check Questions

1.  What is the primary purpose of data ingestion in a data pipeline?
2.  Name at least three different types of data sources that might be involved in data ingestion.
3.  What is the difference between batch ingestion and streaming ingestion?
4.  Why is choosing the right ingestion method and frequency important for a data pipeline?

## Supports

- [[skills/computing/data-ai/data-engineering-platforms/data-engineering/microskills/data-ingestion|Data Ingestion]]
