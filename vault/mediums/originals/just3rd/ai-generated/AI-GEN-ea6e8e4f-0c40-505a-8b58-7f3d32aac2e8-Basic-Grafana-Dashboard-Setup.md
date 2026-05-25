---
type: "medium"
title: "Basic Grafana Dashboard Setup"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/operations-reliability/observability/system-monitoring/microskills/basic-grafana-dashboard-setup|basic-grafana-dashboard-setup]]"
learning-time-in-minutes: 5
---
# Basic Grafana Dashboard Setup

This lesson focuses on understanding the fundamental steps involved in setting up a simple Grafana dashboard. By the end of this lesson, you will be able to configure a basic dashboard to visualize metrics collected by Prometheus exporters.

## Why Set Up a Grafana Dashboard?

Prometheus collects a vast amount of metric data from your systems. While this raw data is valuable, it's often difficult to interpret directly. Grafana acts as a powerful visualization tool that transforms this data into easily understandable charts, graphs, and panels. A well-configured dashboard allows you to:

*   **Monitor System Health:** Quickly identify performance issues, resource utilization, and potential bottlenecks.
*   **Track Trends:** Observe how your system's performance changes over time.
*   **Set Alerts:** Proactively be notified when critical thresholds are breached.
*   **Gain Insights:** Make data-driven decisions about system optimization and capacity planning.

## Core Concepts

*   **Dashboard:** A collection of panels organized to provide a unified view of specific metrics.
*   **Panel:** A single visualization within a dashboard, such as a graph, a stat, or a table.
*   **Datasource:** The connection Grafana uses to retrieve data. In this context, our primary datasource will be Prometheus.
*   **Query:** The instruction given to the datasource (e.g., Prometheus) to retrieve specific metrics.

## Steps to Set Up a Basic Grafana Dashboard

Let's walk through the process of creating a simple dashboard to visualize CPU usage from a Prometheus exporter.

### Step 1: Ensure Prometheus is Running and Collecting Metrics

Before you can visualize data in Grafana, Prometheus must be actively scraping metrics from your exporters. For this example, assume you have a Prometheus instance running and it's successfully collecting metrics from a node exporter (which exposes host-level metrics like CPU, memory, disk, etc.).

### Step 2: Access Grafana

Grafana is typically accessed via a web browser. The default URL is usually `http://localhost:3000` (or the IP address and port where Grafana is deployed). You'll need to log in with your Grafana credentials.

### Step 3: Add Prometheus as a Datasource

1.  Navigate to **Configuration** (usually a gear icon in the left-hand menu).
2.  Select **Data Sources**.
3.  Click the **Add data source** button.
4.  Search for and select **Prometheus**.
5.  **Configure the Prometheus Datasource:**
    *   **Name:** Give your datasource a descriptive name, e.g., "Prometheus-Main".
    *   **URL:** Enter the URL of your Prometheus server. If Prometheus is running on the same host as Grafana and on the default port, this would be `http://localhost:9090`.
    *   **Access:** Leave as "Server (default)".
    *   **HTTP Method:** Usually "GET".
    *   **Scrape Interval:** Leave blank if you want to use Prometheus's default scrape interval.
6.  Click **Save & Test**. You should see a confirmation message indicating the datasource is working.

### Step 4: Create a New Dashboard

1.  Click the **Create** button (usually a plus icon in the left-hand menu).
2.  Select **Dashboard**.
3.  You'll be presented with an empty dashboard. Click **Add new panel**.

### Step 5: Configure a Panel (e.g., CPU Usage)

1.  **Select your Prometheus Datasource:** In the new panel editor, ensure your Prometheus datasource (e.g., "Prometheus-Main") is selected from the dropdown.

2.  **Write a Prometheus Query:** This is where you tell Grafana what data to fetch. For CPU usage, a common metric from `node_exporter` is `node_cpu_seconds_total`. To calculate the *rate* of CPU usage, we use the `rate()` function.

    Enter the following query in the query editor:
    ```promql
    rate(node_cpu_seconds_total{mode!="idle"}[5m]) * 100
    ```
    *   `node_cpu_seconds_total`: The metric representing CPU time spent in different modes.
    *   `{mode!="idle"}`: A label selector to exclude the "idle" CPU mode, so we're only looking at *used* CPU time.
    *   `[5m]`: A range vector selector, calculating the rate over the last 5 minutes. This smooths out rapid fluctuations.
    *   `rate(...) * 100`: Multiplies the rate by 100 to display CPU usage as a percentage.

3.  **Choose a Visualization Type:** On the right-hand side, under "Visualization", select **Graph**. This is ideal for time-series data like CPU usage.

4.  **Panel Options:**
    *   **Panel title:** Give your panel a clear title, e.g., "CPU Usage (%)".
    *   **Units:** Under "Standard options", set the unit to "Percent (0-100)". This helps Grafana display the data correctly.
    *   **Legend:** You can customize the legend to show which CPU cores are being represented (e.g., `{{mode}}`).

5.  Click **Apply** in the top-right corner to return to the dashboard.

### Step 6: Save the Dashboard

1.  Click the **Save dashboard** icon (usually a floppy disk icon) in the top bar.
2.  Give your dashboard a name, e.g., "System Overview".
3.  Choose a folder if you have organized folders set up.
4.  Click **Save**.

You now have a basic Grafana dashboard displaying CPU usage. You can add more panels to visualize other metrics like memory usage, disk I/O, network traffic, etc., by repeating Step 5 and crafting appropriate Prometheus queries.

## Key Takeaways

*   Grafana provides a user-friendly interface to visualize time-series data.
*   Connecting Grafana to your Prometheus datasource is the first crucial step.
*   Each panel on a dashboard represents a specific visualization based on a Prometheus query.
*   `rate()` is a fundamental Prometheus function for calculating usage over time.
*   Understanding the metrics exposed by your Prometheus exporters is key to writing effective queries.

## Supports

- [[skills/computing/systems-infrastructure/operations-reliability/observability/system-monitoring/microskills/basic-grafana-dashboard-setup|Basic Grafana Dashboard Setup]]
