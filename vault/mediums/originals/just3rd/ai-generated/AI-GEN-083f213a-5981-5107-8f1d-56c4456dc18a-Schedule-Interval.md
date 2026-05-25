---
type: "medium"
title: "Scheduling Intervals in Apache Airflow"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/data-ai/data-engineering-platforms/apache-airflow/microskills/schedule-interval|schedule-interval]]"
learning-time-in-minutes: 2
---
# Scheduling Intervals in Apache Airflow

Understanding how to schedule your workflows is crucial for automating tasks effectively. In Apache Airflow, you define *when* your Directed Acyclic Graphs (DAGs) should run using the `schedule_interval` parameter. This parameter tells Airflow how frequently to create DAG runs.

## What is `schedule_interval`?

The `schedule_interval` parameter in a DAG definition controls the frequency at which a DAG should be executed. It's essentially the heartbeat of your automated workflow. Airflow uses this to determine when to trigger a new run of your DAG, allowing you to set up recurring jobs.

You can define `schedule_interval` using:

*   **Cron expressions:** A powerful way to specify complex schedules.
*   **`datetime.timedelta` objects:** For simple fixed intervals.
*   **Predefined strings:** Like `'@daily'`, `'@hourly'`, or `'@once'`.

## Practical Example: Daily Data Ingestion

Imagine you have a DAG that ingests daily sales data from an external API. You want this to run every day at 2 AM.

Here's how you might define this in your DAG file:

```python
from airflow import DAG
from airflow.operators.bash import BashOperator
from datetime import datetime, timedelta

with DAG(
    dag_id='daily_sales_ingestion',
    start_date=datetime(2023, 1, 1),
    schedule_interval='0 2 * * *',  # Cron expression for 2 AM daily
    catchup=False,
    tags=['data_ingestion', 'daily'],
) as dag:
    ingest_data = BashOperator(
        task_id='ingest_sales_data',
        bash_command='python /path/to/your/ingest_script.py',
    )
```

In this example:

*   `'0 2 * * *'` is a cron expression. It means:
    *   `0`: Minute 0
    *   `2`: Hour 2 (2 AM)
    *   `*`: Any day of the month
    *   `*`: Any month
    *   `*`: Any day of the week
*   `catchup=False` ensures that Airflow doesn't run the DAG for all the missed intervals between the `start_date` and the current date when the DAG is first enabled.

## Practice Task

Modify the example above. Instead of running daily at 2 AM, schedule the `daily_sales_ingestion` DAG to run every hour. Then, change it again to run only once, starting from January 1st, 2023.

## Self-Check Questions

1.  What is the primary purpose of the `schedule_interval` parameter in Airflow?
2.  How would you schedule a DAG to run every 15 minutes using a cron expression?
3.  When might you choose to use a `timedelta` object over a cron expression for `schedule_interval`?

## Supports

- [[skills/computing/data-ai/data-engineering-platforms/apache-airflow/microskills/schedule-interval|Schedule Interval]]
