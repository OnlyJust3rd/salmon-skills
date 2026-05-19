---
type: "medium"
title: "Automating Databricks Workflows with Scheduled Jobs"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/data/data-platforms/databricks/microskills/scheduled-job|Scheduled Job]]"
---
# Automating Databricks Workflows with Scheduled Jobs

In Databricks, notebooks are powerful tools for data exploration, analysis, and transformation. However, for repeatable tasks and production pipelines, manually running notebooks is inefficient. Scheduled Jobs allow you to automate the execution of notebooks and other tasks, turning them into reliable, repeatable workflows within your Databricks Lakehouse. This micro-skill focuses on applying the concept of scheduled jobs to automate your data processes.

## What are Databricks Scheduled Jobs?

Databricks Scheduled Jobs are a feature that allows you to define and run a series of tasks automatically at specified intervals or triggers. These tasks can include:

*   **Running Databricks Notebooks:** Execute your data cleaning, transformation, or analysis notebooks.
*   **Running Python scripts or JARs:** Execute custom code.
*   **Executing SQL queries:** Run specific SQL commands.
*   **Orchestrating Multi-task Jobs:** Chain multiple tasks together, defining dependencies between them.

By scheduling jobs, you ensure that your data pipelines run consistently, reliably, and without manual intervention, which is crucial for maintaining data freshness and enabling downstream applications.

## Practical Scenario: Daily Sales Report Generation

Imagine you have a Databricks notebook that aggregates daily sales data from various sources, calculates key performance indicators (KPIs), and saves the results to a Delta table. You need this report to be available every morning for the sales team.

**Workflow:**

1.  **Data Ingestion:** A notebook (e.g., `ingest_sales_data.ipynb`) pulls raw sales data from different systems into a staging area.
2.  **Data Transformation:** Another notebook (e.g., `transform_sales_data.ipynb`) cleans, joins, and aggregates the staged data, calculating metrics like total sales, average order value, and top-selling products.
3.  **Report Generation:** A final notebook (e.g., `generate_daily_sales_report.ipynb`) queries the transformed data to create a summary report, possibly saving it as a new table or exporting it.

Instead of manually running these notebooks every day, you can set up a Databricks Scheduled Job to execute them in sequence.

## Creating a Scheduled Job

Here’s how you would typically set up a scheduled job for the daily sales report:

1.  **Navigate to Jobs:** In your Databricks workspace, go to the "Workflows" section and then select "Jobs."
2.  **Create Job:** Click the "Create Job" button.
3.  **Add Task:**
    *   Give your task a name (e.g., "Daily Sales Report ETL").
    *   Select the **Type** as "Notebook."
    *   Choose the **Path** to your first notebook (e.g., `/Users/your_email/sales_pipelines/ingest_sales_data`).
    *   Select an appropriate **Cluster** to run the task on.
    *   Add subsequent tasks by clicking "+ Add Task," defining dependencies if needed. For our scenario, `transform_sales_data` would depend on `ingest_sales_data`, and `generate_daily_sales_report` would depend on `transform_sales_data`.
4.  **Schedule:**
    *   Click on the "Schedule" tab.
    *   Enable the schedule.
    *   Choose a **Schedule type**, such as "Daily."
    *   Set the **Time of day** (e.g., 3:00 AM) to ensure it runs before business hours.
    *   Specify the **Timezone**.
5.  **Configure Other Settings:** Set up alerts for job failures or successes, and configure retry policies.
6.  **Create:** Click "Create" to save your scheduled job.

Once created, Databricks will automatically run your defined tasks at the scheduled time.

## Practice Task

1.  **Create a simple notebook** in Databricks that performs a basic data transformation (e.g., reading a sample CSV, adding a new column with a constant value, and displaying the result). Save this notebook.
2.  **Create a new Scheduled Job** in Databricks.
3.  **Add a single task** to this job that points to the notebook you created.
4.  **Configure the job to run on a schedule** (e.g., daily, every 15 minutes from now for testing purposes).
5.  **Manually trigger the job** once to ensure it runs successfully.

## Self-Check Questions

*   What is the primary benefit of using Scheduled Jobs over manually running notebooks?
*   Can a Scheduled Job execute multiple notebooks in a specific order? How?
*   What are some common types of tasks that can be included in a Databricks Scheduled Job?
*   Why is it important to set an appropriate timezone for your job schedule?

## Supports

- [[skills/data/data-platforms/databricks/microskills/scheduled-job|Scheduled Job]]
