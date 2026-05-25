---
type: "medium"
title: "Tracking the Golden Signals: Latency, Traffic, Errors, and Saturation"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/operations-reliability/observability/system-monitoring/microskills/golden-signals-tracking|golden-signals-tracking]]"
related-skills:
  - "[[skills/computing/systems-infrastructure/operations-reliability/observability/system-monitoring/system-monitoring|system-monitoring]]"
learning-time-in-minutes: 5
---
# Tracking the Golden Signals: Latency, Traffic, Errors, and Saturation

To effectively monitor the health and performance of our systems, we need to focus on key metrics that indicate user experience and system stability. These are known as the "Golden Signals" and are essential for implementing basic monitoring. This lesson will focus on understanding and tracking these four critical signals: Latency, Traffic, Errors, and Saturation.

## What are the Golden Signals?

The Golden Signals provide a framework for understanding system performance at a high level. They are universally applicable to any system, from a single web server to a complex distributed microservice architecture.

*   **Latency:** The time it takes to serve a request. This is often measured as the time from when a request is initiated to when a response is completed.
*   **Traffic:** A measure of the demand placed on your system. This is typically measured by the number of requests per second.
*   **Errors:** The rate of requests that fail. This includes both explicitly signaled errors (like HTTP 5xx) and implicit errors (like timeouts).
*   **Saturation:** How "full" your service is. This indicates the degree to which your service is resource-constrained.

## Latency: The Speed of Your Service

Latency is a direct measure of how quickly your users receive a response. High latency leads to poor user experience and can signal underlying performance issues.

### Key Concepts

*   **Average Latency:** The average time taken for all requests over a period. While useful, it can hide outliers.
*   **Percentile Latency (e.g., 95th or 99th percentile):** The latency experienced by a certain percentage of users. The 95th percentile, for example, means that 95% of requests are faster than this value. This is crucial for understanding the experience of the majority of your users, not just the average.

### Tracking Latency

We can track latency using command-line tools and by observing dashboard metrics.

**Using Command-Line Tools (Example with `curl` and `time`)**

While `curl` primarily measures the total time of a request, it can be combined with the `time` command to get a basic idea of latency.

```bash
# Measure the time taken for a GET request to example.com
time curl -s -o /dev/null "https://www.example.com"
```

The output of the `time` command will show real, user, and sys time. The `real` time is the most relevant for latency in this context.

**Observing Dashboard Metrics**

Most monitoring dashboards (like Prometheus with Grafana, Datadog, New Relic) will provide charts for latency. Look for percentile graphs (p95, p99) for a realistic view.

## Traffic: The Demand on Your System

Traffic indicates the volume of requests your system is handling. Understanding traffic patterns helps in capacity planning and detecting unusual activity.

### Key Concepts

*   **Requests Per Second (RPS):** The most common unit for measuring traffic.
*   **Throughput:** Similar to RPS, it measures the amount of work done by the system over time.

### Tracking Traffic

**Using Command-Line Tools (Example with `netstat` or `nginx logs`)**

For basic server-level traffic, `netstat` can provide insight into active connections. However, for application-level traffic, analyzing logs or using dedicated metrics collectors is more effective.

If you are running a web server like Nginx, you can get a rough idea of RPS by processing its access logs:

```bash
# Count the number of requests per second from Nginx access log
# This is a simplified example and might need refinement based on log format.
awk '{print strftime("%Y-%m-%d %H:%M:%S", $4)}' /var/log/nginx/access.log | sort | uniq -c | sort -nr | head -n 10
```

**Observing Dashboard Metrics**

Monitoring dashboards are the primary way to track traffic. Look for metrics like "Requests per Second" or "Total Requests" for your services. Correlating traffic spikes with latency or error increases is key.

## Errors: When Things Go Wrong

Errors are a clear indicator that something is not functioning as expected. Tracking errors helps in quickly identifying and resolving issues that affect users.

### Key Concepts

*   **Error Rate:** The percentage of requests that result in an error.
*   **Types of Errors:** HTTP status codes (e.g., 4xx for client errors, 5xx for server errors), application-specific exceptions, timeouts.

### Tracking Errors

**Using Command-Line Tools (Example with `grep` on logs)**

You can often identify errors by searching log files for specific error patterns.

```bash
# Search for HTTP 5xx errors in a web server's error log
grep "\[error\]" /var/log/nginx/error.log
```

**Observing Dashboard Metrics**

Monitoring dashboards should display error rates clearly. Look for trends in error spikes and investigate the specific types of errors occurring. Common metrics include "5xx Error Rate" or "Error Count".

## Saturation: Your System's Capacity Limit

Saturation measures how close your system is to its capacity. When a system becomes saturated, its performance degrades, and it may start to experience increased latency and errors.

### Key Concepts

*   **Resource Utilization:** CPU, memory, disk I/O, network bandwidth.
*   **Queue Lengths:** The number of tasks waiting to be processed.
*   **Concurrency Limits:** The maximum number of simultaneous requests a service can handle.

### Tracking Saturation

**Using Command-Line Tools (Examples)**

*   **CPU/Memory:** `top`, `htop`, `free -m`
*   **Disk I/O:** `iostat`
*   **Network:** `iftop`

```bash
# Check current CPU and memory usage
top -bn1 | head -n 15

# Check free memory
free -m
```

**Observing Dashboard Metrics**

Dashboards should show utilization metrics for your servers and services. Monitor metrics like:

*   CPU utilization (%)
*   Memory utilization (%)
*   Disk I/O wait time
*   Network bandwidth usage
*   Queue lengths for message brokers or worker pools

## Applying the Golden Signals

The real power of the Golden Signals comes from observing them together and understanding their interdependencies.

*   **High Traffic + High Latency = Potential Saturation or Inefficiency.** If traffic increases and latency follows, your system might be struggling to keep up.
*   **High Traffic + High Errors = System Overload.** A surge in traffic accompanied by a rise in errors often indicates that the system is being overwhelmed.
*   **Normal Traffic + High Latency = Performance Degradation or Resource Bottleneck.** If latency is high but traffic is normal, there's likely an underlying issue with a specific resource or service.
*   **Normal Traffic + High Errors = Bug or Configuration Issue.** Errors appearing without a traffic surge often point to a bug in the code or a misconfiguration.
*   **High Resource Utilization (Saturation) leading to Increased Latency/Errors.** This is the direct causal link you want to avoid.

By actively monitoring and understanding these four Golden Signals, you gain the ability to identify performance bottlenecks, anticipate failures, and ensure a stable and responsive system for your users. This forms the foundation for more advanced system monitoring practices.

## Supports

- [[skills/computing/systems-infrastructure/operations-reliability/observability/system-monitoring/microskills/golden-signals-tracking|Golden Signals Tracking]]
