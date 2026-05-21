---
type: "medium"
title: "Task Retries with Airflow's Retry Policy"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/data/data-platforms/apache-airflow/microskills/retry-policy|retry-policy]]"
---
# Task Retries with Airflow's Retry Policy

When building complex data pipelines with Apache Airflow, task failures are inevitable. Instead of having a pipeline halt completely on a transient error (like a temporary network issue or a database overload), Airflow provides a mechanism to automatically retry failed tasks. This feature, known as the **retry policy**, is crucial for building robust and resilient data workflows.

## Understanding Retry Policy

The retry policy in Airflow allows you to configure how many times a task should be retried upon failure, and the delay between each retry. This prevents a single, temporary hiccup from jeopardizing your entire data processing job.

Key parameters for retry policy include:

*   `retries`: The number of times to retry the task.
*   `retry_delay`: The time to wait between retries. This can be specified as a `timedelta` object.
*   `retry_exponential_backoff`: If set to `True`, the `retry_delay` will increase exponentially with each subsequent retry. This is useful to avoid overwhelming a struggling external service.
*   `max_retry_delay`: The maximum delay to wait between retries when `retry_exponential_backoff` is enabled.

## Practical Scenario: Fetching External Data

Imagine you have a task that fetches data from an external API. This API might occasionally experience high load or brief downtime. If your task fails, you don't want to immediately mark it as failed and stop the pipeline. Instead, you can configure it to retry a few times with a reasonable delay.

Consider this example:

```python
from __future__ import annotations

import pendulum

from airflow.decorators import task
from airflow.models.dag import DAG
from airflow.operators.bash import BashOperator

with DAG(
    dag_id="api_data_fetch_with_retries",
    schedule=None,
    start_date=pendulum.datetime(2023, 10, 26, tz="UTC"),
    catchup=False,
    tags=["example", "retries"],
) as dag:
    @task
    def fetch_external_data():
        # This is a placeholder. In a real scenario, this would call an API.
        # Let's simulate a failure on the first attempt
        import random
        if random.random() < 0.8: # 80% chance of failure on first few tries
            raise ValueError("API temporarily unavailable")
        print("Successfully fetched data!")
        return "data"

    fetch_task = fetch_external_data.override(
        retries=3,  # Retry up to 3 times
        retry_delay=pendulum.duration(minutes=5),  # Wait 5 minutes between retries
        retry_exponential_backoff=True,
        max_retry_delay=pendulum.duration(hours=1) # Max delay of 1 hour
    )()

    process_data_task = BashOperator(
        task_id="process_fetched_data",
        bash_command="echo 'Processing data...'",
    )

    fetch_task >> process_data_task
```

In this example, the `fetch_external_data` task is configured to retry up to 3 times, with an initial delay of 5 minutes. If `retry_exponential_backoff` is `True`, the delay will increase with each retry, up to a maximum of 1 hour. If the task still fails after all retries, it will be marked as failed, and the subsequent task (`process_data_task`) will not run.

## Practice Task

Modify the `api_data_fetch_with_retries` DAG provided above.

1.  Change the `retries` parameter to `5`.
2.  Set `retry_delay` to `pendulum.duration(minutes=2)`.
3.  Keep `retry_exponential_backoff=True` and `max_retry_delay=pendulum.duration(minutes=30)`.
4.  Add a new task `log_final_failure` that runs only if `fetch_task` ultimately fails (after all retries). This task should simply print "Final fetch attempt failed, logging incident.". You'll need to look into Airflow's `trigger_rule` for this.

## Self-Check Questions

1.  What happens if a task fails and `retries` is set to `0`?
2.  Why might you use `retry_exponential_backoff=True` instead of a fixed `retry_delay`?
3.  If a task fails and then succeeds on its second retry, will the downstream tasks run?

## Supports

- [[skills/data/data-platforms/apache-airflow/microskills/retry-policy|Retry Policy]]
