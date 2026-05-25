---
type: "medium"
title: "Configuring Prometheus for Target Application Scraping"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/operations-reliability/observability/system-monitoring/microskills/target-application-scraping|target-application-scraping]]"
learning-time-in-minutes: 3
---
# Configuring Prometheus for Target Application Scraping

This lesson focuses on a crucial step in system monitoring: telling Prometheus exactly *what* to collect metrics from. We'll learn how to configure Prometheus to scrape metrics from specific applications, a fundamental skill for implementing and visualizing Prometheus metrics.

## The Core Idea: Targets

Prometheus operates by *scraping* metrics from configured targets. A target is essentially an endpoint (usually an HTTP endpoint) that exposes metrics in a Prometheus-readable format. Without proper configuration, Prometheus won't know where to find your application's performance data.

The configuration is managed in a file, typically named `prometheus.yml`. This file defines scrape configurations, including which jobs to monitor and the targets within those jobs.

## Key Configuration Elements

When configuring targets, you'll primarily work with these sections in `prometheus.yml`:

*   **`scrape_configs`**: This is the top-level key that contains all your scraping definitions.
*   **`job_name`**: This is a logical grouping of targets. All targets within the same `job_name` are considered to be of the same type or purpose. For example, you might have a `job_name` called `my-web-app` or `database-servers`.
*   **`static_configs`**: This is a straightforward way to define a fixed list of targets. You specify the targets directly within the configuration.
*   **`targets`**: Under `static_configs`, this is a list of the network addresses (host:port) of the applications you want Prometheus to scrape.
*   **`metric_path`**: (Optional) If your application exposes metrics on a path other than the default `/metrics`, you can specify it here.

## A Practical Example: Scraping a Simple Application

Let's imagine you have a basic Go application that exposes metrics on `http://localhost:8080/metrics`.

Here's how you would configure Prometheus to scrape this application:

```yaml
global:
  scrape_interval: 15s # How often to scrape targets by default

scrape_configs:
  - job_name: 'my-go-app' # A descriptive name for this job

    # If the metrics path is not /metrics, you can specify it here
    # metric_path: '/my_metrics'

    static_configs:
      - targets: ['localhost:8080'] # The address of your application's metrics endpoint
```

**Explanation:**

1.  **`global: scrape_interval: 15s`**: This sets the default scraping interval for all jobs to 15 seconds. If a job has its own `scrape_interval` defined, it will override this global setting.
2.  **`scrape_configs:`**: This marks the beginning of our scraping configurations.
3.  **`- job_name: 'my-go-app'`**: We define a new job named `my-go-app`. This name will appear in Prometheus's UI and is useful for filtering and querying metrics.
4.  **`static_configs:`**: We're using static configuration, meaning we are explicitly listing the targets.
5.  **`- targets: ['localhost:8080']`**: This tells Prometheus to scrape the endpoint `http://localhost:8080/metrics`. Prometheus automatically appends `/metrics` unless `metric_path` is specified.

## Applying the Configuration

1.  **Save the configuration**: Save the YAML content above into a file named `prometheus.yml` in your Prometheus installation directory.
2.  **Restart Prometheus**: If Prometheus is already running, you'll need to restart it for the new configuration to take effect. The command to do this depends on how you've installed Prometheus (e.g., systemd service, Docker).

    For example, if running via Docker:
    ```bash
    docker restart <prometheus_container_name_or_id>
    ```
3.  **Verify in Prometheus UI**: Access your Prometheus web UI (usually at `http://localhost:9090`). Navigate to the "Targets" page. You should see your `my-go-app` job listed, and its state should indicate that it's "UP" and actively scraping.

## Common Pitfalls and Considerations

*   **Incorrect Host/Port**: Double-check that the `targets` accurately reflect the host and port where your application is exposing metrics.
*   **Firewall Issues**: Ensure that Prometheus can reach the target application's port. Firewalls can block the scraping process.
*   **Metrics Path**: If your application uses a custom metrics path (not `/metrics`), ensure `metric_path` is correctly set in your `prometheus.yml`.
*   **Application Not Running**: If the target application is not running or has crashed, Prometheus will report the target as "DOWN".
*   **Metric Exposure Format**: Ensure your application is exposing metrics in a format that Prometheus understands. Most libraries provide this automatically.

By mastering the configuration of targets, you lay the groundwork for effective system monitoring. Prometheus will now be able to collect the data you need to understand your application's performance.

## Supports

- [[skills/computing/systems-infrastructure/operations-reliability/observability/system-monitoring/microskills/target-application-scraping|Target Application Scraping]]
