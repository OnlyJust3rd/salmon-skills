---
type: "medium"
title: "Visualizing Prometheus Metrics with Grafana Dashboards"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/cloud-devops/platform-engineering/system-monitoring/microskills/dashboard-metric-visualization|dashboard-metric-visualization]]"
---
# Visualizing Prometheus Metrics with Grafana Dashboards

This lesson focuses on **Dashboard Metric Visualization**, a key aspect of implementing and visualizing Prometheus metrics. You'll learn how to connect Prometheus data to Grafana and create meaningful dashboards.

## Why Visualize Metrics?

Raw metric data, while informative, is often difficult to interpret. Dashboards transform this data into easily digestible visual representations, allowing for:

*   **Trend Analysis:** Spotting patterns and changes over time.
*   **Anomaly Detection:** Identifying unusual spikes or drops in performance.
*   **System Health Overview:** Gaining a quick understanding of your application's state.
*   **Informed Decision-Making:** Using data to guide troubleshooting and optimization efforts.

## Connecting Grafana to Prometheus

Grafana needs to know where to fetch data from. This is done by configuring Prometheus as a **data source**.

### Steps to Add Prometheus as a Data Source:

1.  **Access Grafana:** Open your Grafana instance in a web browser.
2.  **Navigate to Data Sources:** In the left-hand menu, hover over the **gear icon** (Configuration) and click on **Data Sources**.
3.  **Add Data Source:** Click the **"Add data source"** button.
4.  **Select Prometheus:** Choose **"Prometheus"** from the list of available data sources.
5.  **Configure Settings:**
    *   **Name:** Give your data source a descriptive name (e.g., `Prometheus-Dev`).
    *   **URL:** Enter the URL of your Prometheus server. This is typically `http://<prometheus-host>:9090` (replace `<prometheus-host>` with your Prometheus server's IP address or hostname).
    *   **Access:** Usually, "Server (default)" is appropriate.
    *   **Authentication:** If your Prometheus server requires authentication, configure it here. For a basic setup, this might not be necessary.
6.  **Save & Test:** Click the **"Save & Test"** button. You should see a confirmation message indicating "Data source is working."

## Creating Your First Grafana Dashboard

Once Grafana is connected to Prometheus, you can start building dashboards.

### Steps to Create a Dashboard:

1.  **Navigate to Dashboards:** In the left-hand menu, click the **plus icon** (+) and select **"Dashboard"**.
2.  **Add a New Panel:** Click the **"Add new panel"** button. This opens the panel configuration screen.

### Configuring a Panel

Each panel on your dashboard displays a specific visualization of a metric.

1.  **Data Source Selection:** In the "Query" tab of the panel editor, ensure your Prometheus data source (e.g., `Prometheus-Dev`) is selected.

2.  **Metric Query (PromQL):** This is where you tell Grafana which metric to fetch and how to process it. You'll use Prometheus Query Language (PromQL).

    Let's use a common example: visualizing the total number of HTTP requests handled by your application. Assuming your application exposes a metric named `http_requests_total` (a counter), you can use the following PromQL query:

    ```promql
    http_requests_total
    ```

    To see requests per second, you can use the `rate()` function:

    ```promql
    rate(http_requests_total[5m])
    ```
    This calculates the per-second rate of increase of `http_requests_total` over the last 5 minutes.

3.  **Visualization Settings:**
    *   **Visualization Type:** On the right-hand side, choose a visualization type. For time-series data like request rates, **"Graph"** (or "Time series") is a common choice. Other options include "Stat," "Gauge," "Table," etc.
    *   **Panel Title:** Give your panel a descriptive title (e.g., "HTTP Requests Per Second").
    *   **Units:** Set the appropriate unit for your metric (e.g., "req/sec").
    *   **Legend:** Configure how the metric name appears in the legend.

4.  **Saving the Panel:** Click **"Apply"** in the top right corner to add the panel to your dashboard.

5.  **Saving the Dashboard:** Click the **disk icon** (Save dashboard) at the top of the dashboard and give your dashboard a name (e.g., `My Application Overview`).

## Common Visualization Techniques and PromQL

Here are some common scenarios and the PromQL queries you might use:

| Goal                             | PromQL Query                                                                         | Visualization Type |
| :------------------------------- | :----------------------------------------------------------------------------------- | :----------------- |
| HTTP Requests per second         | `rate(http_requests_total[5m])`                                                      | Time series        |
| CPU Usage per core               | `avg by (cpu) (rate(node_cpu_seconds_total{mode!="idle"}[5m])) * 100`                | Time series        |
| Memory Usage                     | `node_memory_MemTotal_bytes - node_memory_MemAvailable_bytes`                        | Time series        |
| Network Traffic (bytes received) | `rate(node_network_receive_bytes_total{device!="lo"}[5m])`                           | Time series        |
| Application Error Rate           | `sum(rate(http_requests_total{code=~"5..$"}[5m])) / sum(rate(http_requests_total[5m]))` | Time series / Stat |

**Explanation of PromQL functions used:**

*   `rate(v range-vector)`: Calculates the per-second average rate of increase for a given `range-vector`. Essential for counters.
*   `sum(v)`: Aggregates all elements in the vector into a single sum.
*   `avg by (label)`: Calculates the average of the elements in the vector, grouping by the specified `label`.

## Refining Your Dashboards

*   **Add More Panels:** Continue adding panels to visualize different aspects of your system.
*   **Organize Panels:** Drag and drop panels to arrange them logically. Resize them as needed.
*   **Use Variables:** Grafana variables allow you to create dynamic dashboards. For example, you can create a variable to select different application instances or environments, and your queries will update automatically.
*   **Alerting:** While beyond this lesson's scope, Grafana also allows you to set up alerts based on metric thresholds.

By mastering the connection between Prometheus and Grafana, and understanding how to write effective PromQL queries, you can build powerful dashboards that provide deep insights into your system's performance and health.

## Supports

- [[skills/cloud-devops/platform-engineering/system-monitoring/microskills/dashboard-metric-visualization|Dashboard Metric Visualization]]
