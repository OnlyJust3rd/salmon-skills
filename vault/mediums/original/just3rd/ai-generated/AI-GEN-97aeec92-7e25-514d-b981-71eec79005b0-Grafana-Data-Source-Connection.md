---
type: "medium"
title: "Connecting Grafana to Prometheus"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/observability-operations/system-monitoring/microskills/grafana-data-source-connection|grafana-data-source-connection]]"
learning-time-in-minutes: 3
---
# Connecting Grafana to Prometheus

This lesson focuses on establishing a connection between Grafana and a Prometheus server. This is a crucial step in visualizing the metrics collected by Prometheus, allowing you to gain insights into your system's performance.

## Why Connect Grafana to Prometheus?

Prometheus excels at collecting and storing time-series data (metrics). However, its built-in web UI is primarily for querying and basic exploration. For creating comprehensive, easily digestible dashboards that provide an overview of your system's health, Grafana is the industry standard. Connecting Grafana to Prometheus allows you to leverage Prometheus's data collection capabilities and Grafana's powerful visualization engine.

## Core Concept: Data Sources in Grafana

Grafana uses the concept of "Data Sources" to define where it fetches data from. When you connect Grafana to Prometheus, you are essentially configuring a Prometheus data source within Grafana. This tells Grafana the address of your Prometheus server and how to communicate with it.

## Steps to Connect Grafana to Prometheus

The process involves a few straightforward steps within the Grafana interface. We'll assume you have both a running Prometheus instance and a running Grafana instance.

### Step 1: Access Grafana and Navigate to Data Sources

1.  Log in to your Grafana instance.
2.  In the left-hand navigation menu, hover over the **Configuration** gear icon.
3.  Click on **Data Sources**.

### Step 2: Add a New Data Source

1.  On the Data Sources page, click the **Add data source** button.
2.  In the list of available data sources, search for or select **Prometheus**.

### Step 3: Configure Prometheus Data Source Settings

You will now see a configuration page for the Prometheus data source. Here are the essential settings:

*   **Name:** Give your data source a descriptive name. Something like "Prometheus Production" or "My App Metrics" is good. This name will appear when you select data sources for your panels.
*   **URL:** This is the most critical setting. It's the HTTP address of your Prometheus server.
    *   If Prometheus is running on the same machine as Grafana, it might be `http://localhost:9090`.
    *   If it's on a different server, use its IP address or hostname: `http://<prometheus-server-ip-or-hostname>:9090`.
*   **Access:**
    *   **Server (default):** Grafana server will make requests directly to Prometheus. This is the most common and recommended setting.
    *   **Browser:** Grafana will proxy requests from the user's browser to Prometheus. This is useful in specific network configurations but less common.
*   **Authentication:** If your Prometheus server requires authentication, you can configure it here (e.g., Basic Auth with username and password). For a basic setup, you likely won't need this.

**Example Configuration:**

Let's say your Prometheus server is accessible at `http://192.168.1.100:9090`. Your configuration would look like this:

*   **Name:** `Prometheus Cluster A`
*   **URL:** `http://192.168.1.100:9090`
*   **Access:** `Server`

### Step 4: Save and Test the Connection

1.  After filling in the necessary details, scroll down and click the **Save & test** button.
2.  Grafana will attempt to connect to your Prometheus server. You should see a green notification message like "Data source is working" if the connection is successful.

If you encounter an error, double-check the URL, ensure Prometheus is running and accessible from where Grafana is running, and verify any firewall rules.

## What Happens Next?

Once successfully connected, you can start using this Prometheus data source when creating or editing dashboard panels. When you add a panel, you'll be prompted to select a data source. Choose the name you gave your Prometheus connection, and then you can start writing PromQL queries to fetch and visualize your metrics.

## Supports

- [[skills/computing/systems-infrastructure/observability-operations/system-monitoring/microskills/grafana-data-source-connection|Grafana Data Source Connection]]
