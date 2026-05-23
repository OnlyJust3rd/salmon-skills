---
type: "medium"
title: "Prometheus: The Metric Collector"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/observability-operations/system-monitoring/microskills/prometheus-functionality|prometheus-functionality]]"
learning-time-in-minutes: 3
---
# Prometheus: The Metric Collector

Prometheus is a powerful open-source system monitoring and alerting toolkit. Its primary role is to collect and store time-series data, which are measurements of things over time. Think of it as a digital detective meticulously recording every fluctuation in your system's health.

### What is Prometheus's Core Functionality?

At its heart, Prometheus does two main things:

1.  **Metric Collection:** It gathers numerical metrics from your applications and infrastructure.
2.  **Metric Querying:** It provides a powerful language to query and analyze this collected data.

### How Does Prometheus Collect Metrics?

Prometheus operates on a pull-based model. This means Prometheus actively scrapes (fetches) metrics from configured targets (your applications or services).

Here's a simplified view of the process:

*   **Targets:** These are the services or applications you want to monitor. Each target exposes its metrics at a specific HTTP endpoint, usually `/metrics`.
*   **Scraping:** Prometheus periodically sends HTTP requests to these `/metrics` endpoints.
*   **Storage:** The scraped data is stored in a time-series database, which is a core component of Prometheus. This database is optimized for handling data that changes over time.

### Understanding Prometheus Metrics

Prometheus stores data as time series, which are identified by a metric name and a set of key-value pairs called labels.

*   **Metric Name:** Describes the measured quantity (e.g., `http_requests_total`, `node_cpu_seconds_total`).
*   **Labels:** Provide dimensions or characteristics of the metric (e.g., `method="POST"`, `handler="/api/users"`, `instance="192.168.1.1:8080"`).

**Example Metric:**

Consider a metric named `http_requests_total` with the following labels:

`http_requests_total{method="POST", handler="/api/users", instance="192.168.1.1:8080"} 12345`

This line tells us:

*   The total number of HTTP requests is `12345`.
*   The request method was `POST`.
*   The handler (endpoint) was `/api/users`.
*   The request came from the instance at `192.168.1.1` on port `8080`.

### Prometheus Querying with PromQL

Prometheus Query Language (PromQL) is the language you use to interact with your metrics. It allows you to select, aggregate, and perform calculations on the time-series data.

Let's look at a few fundamental PromQL queries:

#### Selecting Metrics

To simply view the latest value of a metric:

```promql
http_requests_total
```

This will return the current value of the `http_requests_total` metric across all its instances and labels.

#### Filtering with Labels

You can filter metrics based on their labels using curly braces `{}`:

```promql
http_requests_total{method="POST"}
```

This query will only show the `http_requests_total` for POST requests.

#### Aggregation

PromQL excels at aggregating data. The `sum()` function is commonly used to sum up values across different series:

```promql
sum(http_requests_total)
```

This will give you the total number of all HTTP requests, regardless of method or handler.

To sum requests for a specific handler:

```promql
sum(http_requests_total{handler="/api/users"})
```

#### Rate of Change

A very common task is to calculate the rate at which a counter (like `http_requests_total`) is increasing. The `rate()` function is used for this:

```promql
rate(http_requests_total{handler="/api/users"}[5m])
```

This query calculates the per-second average rate of increase of `http_requests_total` for the `/api/users` handler over the last 5 minutes.

### Key Takeaways for Prometheus Functionality

*   Prometheus's primary role is **metric collection and storage**.
*   It uses a **pull-based model** to scrape metrics from targets.
*   Metrics are identified by a **name and labels**.
*   **PromQL** is the query language for retrieving and analyzing metric data.
*   Functions like `rate()` are essential for understanding trends and performance.

## Supports

- [[skills/computing/systems-infrastructure/observability-operations/system-monitoring/microskills/prometheus-functionality|Prometheus Functionality]]
