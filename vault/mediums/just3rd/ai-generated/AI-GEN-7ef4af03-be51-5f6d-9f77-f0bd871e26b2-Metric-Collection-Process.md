---
type: "medium"
title: "Understanding the Metric Collection Process in Prometheus"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/cloud-devops/platform-engineering/system-monitoring/microskills/metric-collection-process|metric-collection-process]]"
---
# Understanding the Metric Collection Process in Prometheus

In the realm of system monitoring, understanding how your systems are performing is crucial. Prometheus, a popular open-source monitoring and alerting toolkit, plays a significant role in this. At its core, Prometheus excels at collecting and storing metrics. This lesson will focus on **how Prometheus gathers this vital data**, specifically the **Metric Collection Process** through its exporters.

## The Role of Prometheus Exporters

Imagine Prometheus as a central brain that needs information from all parts of your body (your systems and applications). It can't directly peek into every process or service. This is where **exporters** come in.

Prometheus exporters are small, dedicated programs that run alongside your applications or services. Their primary job is to **expose metrics** in a format that Prometheus can understand and scrape (collect). Think of them as translators, converting the internal state of a service into a standardized language of numbers and time-series data.

### How Exporters Work

Exporters typically expose their metrics over an HTTP endpoint, usually on a specific port. Prometheus is configured to periodically "scrape" (request data from) these HTTP endpoints. When Prometheus scrapes an exporter, it receives a text-based payload containing the metrics.

Here's a simplified view of the process:

1.  **Exporter Runs:** An exporter is installed and runs alongside the target service.
2.  **Exporter Collects Metrics:** The exporter queries the service's internal state, system resources, or other relevant data sources to gather metrics.
3.  **Exporter Exposes Metrics:** The exporter makes these collected metrics available via an HTTP endpoint.
4.  **Prometheus Scrapes:** Prometheus is configured with the address of the exporter's HTTP endpoint. It periodically sends an HTTP GET request to this endpoint.
5.  **Prometheus Receives Data:** The exporter responds to Prometheus's request with a list of metrics and their current values.
6.  **Prometheus Stores Data:** Prometheus then stores this time-series data in its database for querying and visualization.

## Common Types of Prometheus Exporters

There are two main categories of exporters:

*   **Blackbox Exporters:** These exporters monitor services from the outside, mimicking how an end-user would interact with them. For example, a `blackbox_exporter` can check if a website is up by attempting to fetch its homepage.
*   **Service-Specific Exporters:** These exporters are designed to collect metrics directly from the internal workings of specific applications or services. Examples include:
    *   **`node_exporter`**: Collects hardware and OS metrics from Linux servers (CPU, memory, disk, network).
    *   **`mysqld_exporter`**: Collects metrics from MySQL databases.
    *   **`redis_exporter`**: Collects metrics from Redis instances.
    *   **`kube-state-metrics`**: Collects metrics from Kubernetes objects.

### Example: The `node_exporter`

The `node_exporter` is a fundamental exporter for monitoring host systems. Once installed and running, it exposes metrics like CPU usage, memory utilization, disk I/O, and network traffic on an HTTP endpoint, typically `http://localhost:9100/metrics`.

When Prometheus scrapes this endpoint, it might receive data that looks something like this:

```
# HELP node_cpu_seconds_total Counter, total seconds the cpus have spent in different modes.
# TYPE node_cpu_seconds_total counter
node_cpu_seconds_total{cpu="0",mode="idle"} 12345.67
node_cpu_seconds_total{cpu="0",mode="user"} 8765.43
# HELP node_memory_MemAvailable_bytes Average available memory in bytes.
# TYPE node_memory_MemAvailable_bytes gauge
node_memory_MemAvailable_bytes 543210.98
```

In this snippet:

*   `# HELP` and `# TYPE` lines provide metadata about the metric.
*   Lines like `node_cpu_seconds_total{cpu="0",mode="idle"} 12345.67` represent a time-series data point:
    *   `node_cpu_seconds_total`: The metric name.
    *   `{cpu="0",mode="idle"}`: Labels that provide context (e.g., this is for CPU core 0 in idle mode).
    *   `12345.67`: The value of the metric at the time of scraping.

## Key Concepts to Understand

*   **Scraping:** The process by which Prometheus actively fetches metrics from an HTTP endpoint.
*   **Targets:** The services or exporters that Prometheus is configured to scrape.
*   **Labels:** Key-value pairs that add metadata to metrics, allowing for powerful filtering and aggregation.
*   **Time-Series Data:** Data that consists of a sequence of data points indexed in time order. Prometheus stores all its collected data this way.

By understanding how exporters make metric data available, you lay the foundation for effectively configuring Prometheus to collect the data you need for robust system monitoring.

## Supports

- [[skills/cloud-devops/platform-engineering/system-monitoring/microskills/metric-collection-process|Metric Collection Process]]
