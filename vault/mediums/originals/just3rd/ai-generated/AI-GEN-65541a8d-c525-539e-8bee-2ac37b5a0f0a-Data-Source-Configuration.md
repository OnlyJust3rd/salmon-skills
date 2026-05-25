---
type: "medium"
title: "Connecting Grafana to Prometheus: Data Source Configuration"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/operations-reliability/observability/system-monitoring/microskills/data-source-configuration|data-source-configuration]]"
learning-time-in-minutes: 5
---
# Connecting Grafana to Prometheus: Data Source Configuration

In the realm of system monitoring, getting your data where you need it is crucial. Prometheus collects metrics, but to visualize and analyze them effectively, you need a tool like Grafana. This lesson focuses on the fundamental step of connecting Grafana to Prometheus, specifically the **Data Source Configuration**. Understanding this is key to unlocking the power of your system metrics.

## Why Connect Grafana to Prometheus?

Prometheus, as a monitoring system, excels at scraping and storing time-series data. However, its built-in querying interface (PromQL) can be powerful but less intuitive for creating visually appealing and easily understandable dashboards.

Grafana, on the other hand, is a leading open-source analytics and monitoring solution designed for visualizing data. By connecting Grafana to Prometheus, you enable it to:

*   **Query Prometheus data:** Grafana sends PromQL queries to Prometheus and retrieves the results.
*   **Visualize metrics:** It then uses these results to create charts, graphs, gauges, and other visual representations.
*   **Build interactive dashboards:** You can design custom dashboards that provide a consolidated view of your system's health and performance.

## Understanding the Data Source Concept

In Grafana, a "Data Source" is simply a connection to a system that provides data. Think of it as a bridge. When you configure a data source, you're telling Grafana:

1.  **What type of data system it is:** (e.g., Prometheus, InfluxDB, MySQL).
2.  **Where to find it:** (its network address or URL).
3.  **How to authenticate:** (if required, though often not for basic Prometheus setups).

For this microskill, the data system is Prometheus.

## Step-by-Step: Configuring Prometheus as a Data Source in Grafana

Let's walk through the process of setting up a Prometheus data source in Grafana. We'll assume you have both Prometheus and Grafana running and accessible.

### 1. Access Grafana

Open your web browser and navigate to your Grafana instance's URL. Log in with your credentials.

### 2. Navigate to Data Sources

Once logged in, you'll typically find the data source configuration under the administration or configuration menu.

*   Hover over the **gear icon** (Administration) in the left-hand sidebar.
*   Click on **Data sources**.

### 3. Add a New Data Source

On the Data sources page, you'll see any existing data sources. To add a new one:

*   Click the **Add data source** button.

### 4. Select Prometheus

Grafana supports a wide array of data sources. In the list of available options, find and click on **Prometheus**.

### 5. Configure the Connection Details

This is where you provide Grafana with the information it needs to connect to your Prometheus server.

*   **Name:** Give your data source a descriptive name. Something like `Prometheus-Main` or `My-Prometheus` is good. This name will appear when you select a data source for a dashboard panel.

*   **URL:** This is the most critical piece of information. Enter the URL of your Prometheus server. This is typically in the format:
    ```
    http://<prometheus-server-ip-or-hostname>:<port>
    ```
    For example, if your Prometheus is running on `localhost` on the default port `9090`, the URL would be:
    ```
    http://localhost:9090
    ```
    If your Prometheus is accessible via a different IP address or hostname, use that instead.

*   **Access:** This setting determines how Grafana accesses the data source.
    *   **Server (default):** Grafana server makes requests to Prometheus. This is the most common and recommended setting.
    *   **Browser:** Your browser makes requests to Prometheus. This is less common and can have security implications.

*   **Authentication (Optional):** If your Prometheus server requires authentication (e.g., Basic Auth, API Key), you'll configure those details here. For a basic Prometheus setup, authentication is often not enabled, so you can leave these fields blank.

*   **HTTP Settings (Optional):** You can adjust things like "HTTP Method" or "Custom HTTP Headers" if needed for advanced setups. For most cases, the defaults are fine.

*   **Max concurrent Scrapes:** This setting is for Prometheus itself, not Grafana. You can leave it at its default.

*   **Scrape interval:** Similar to the above, this is a Prometheus setting.

### 6. Save and Test

After filling in the essential details (especially the URL), scroll down and click the **Save & test** button.

Grafana will attempt to connect to your Prometheus server.

*   **Success:** If the connection is successful, you'll see a green confirmation message, usually stating "Data source is working." This means Grafana can reach and communicate with your Prometheus instance.
*   **Failure:** If you encounter an error, double-check the URL for typos, ensure your Prometheus server is running, and verify network connectivity between your Grafana and Prometheus instances.

## What Happens Next?

Once your Prometheus data source is successfully configured, you can start using it! When you add a new panel to a Grafana dashboard, you'll be prompted to select a data source. You can then choose the Prometheus data source you just configured. After selecting it, you'll be able to write PromQL queries in the query editor to pull the metrics you want to visualize.

This fundamental step of data source configuration is the gateway to building powerful and insightful monitoring dashboards with Grafana and Prometheus.

## Supports

- [[skills/computing/systems-infrastructure/operations-reliability/observability/system-monitoring/microskills/data-source-configuration|Data Source Configuration]]
