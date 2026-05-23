---
type: "medium"
title: "Prometheus Server Configuration"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/observability-operations/system-monitoring/microskills/prometheus-server-configuration|prometheus-server-configuration]]"
learning-time-in-minutes: 4
---
# Prometheus Server Configuration

This lesson focuses on setting up and running a Prometheus server, a crucial component for system monitoring. We'll cover the essential configuration steps to get Prometheus up and running, ready to scrape metrics from your target applications.

## Core Idea: What is Prometheus?

Prometheus is an open-source systems monitoring and alerting toolkit. At its heart, it's a time-series database and a powerful querying language (PromQL) designed to store and analyze metrics. A key feature is its pull-based model: Prometheus actively scrapes (fetches) metrics from configured targets over HTTP.

## Essential Components of Prometheus Configuration

The primary configuration file for Prometheus is `prometheus.yml`. This YAML file dictates how Prometheus operates, including which targets to scrape and how often.

The main sections you'll encounter in `prometheus.yml` are:

1.  **`global`**: Defines global settings that apply to all scraped targets.
2.  **`scrape_configs`**: This is where you define the jobs and targets Prometheus will monitor.

### Global Configuration

Within the `global` section, common settings include:

*   `scrape_interval`: The interval at which Prometheus scrapes metrics from targets. Defaults to 1 minute.
*   `evaluation_interval`: The interval at which Prometheus evaluates alerting rules. Defaults to 1 minute.

### Scrape Configurations

The `scrape_configs` section is a list of jobs. Each job defines a set of targets that Prometheus should scrape.

A typical job configuration includes:

*   `job_name`: A unique name for the job (e.g., `node_exporter`, `my_app`).
*   `static_configs`: A way to manually specify targets. This is useful for small deployments or getting started.
    *   `targets`: A list of addresses (host:port) of the targets.
*   `scrape_interval` (optional): You can override the global scrape interval for specific jobs.
*   `metrics_path` (optional): The HTTP path where metrics are exposed. Defaults to `/metrics`.

## Step-by-Step: Setting Up a Basic Prometheus Server

Let's walk through setting up a basic Prometheus server that scrapes metrics from a hypothetical application.

### Prerequisites

*   Prometheus installed on your system. You can download binaries from the [Prometheus website](https://prometheus.io/download/).
*   A target application exposing metrics on an HTTP endpoint (e.g., on port `9090` at `/metrics`). For this example, we'll assume a target at `localhost:9090`.

### Step 1: Create the Prometheus Configuration File

Create a file named `prometheus.yml` in the directory where you'll run Prometheus.

### Step 2: Define the Configuration

Populate `prometheus.yml` with the following content:

```yaml
global:
  scrape_interval: 15s # How often to scrape targets

scrape_configs:
  - job_name: 'prometheus' # Name of the job
    static_configs:
      - targets: ['localhost:9090'] # Address of the target application

  - job_name: 'node_exporter' # Example for node exporter
    static_configs:
      - targets: ['localhost:9100'] # Assuming node exporter is running on port 9100
```

**Explanation:**

*   The `global` section sets the scrape interval to 15 seconds. This means Prometheus will attempt to fetch metrics from targets every 15 seconds.
*   The first job, named `'prometheus'`, is configured to scrape itself. This is a common practice for monitoring Prometheus itself. It targets `localhost:9090`.
*   The second job, `'node_exporter'`, is an example of how you would configure Prometheus to scrape metrics from a common system exporter. It targets `localhost:9100`.

### Step 3: Run Prometheus

Navigate to the directory containing your `prometheus.yml` file in your terminal and run Prometheus:

```bash
./prometheus --config.file=prometheus.yml
```

If successful, you will see output indicating that Prometheus has started.

### Step 4: Verify in the Prometheus UI

Open your web browser and navigate to `http://localhost:9090`. You should see the Prometheus UI.

*   Go to the **Status** menu and select **Targets**.
*   You should see your configured jobs (`prometheus`, `node_exporter`) with their targets.
*   The **State** column should show "UP" for your targets if Prometheus can successfully scrape them. If it's "DOWN", check the target's address and ensure it's running and exposing metrics.

## Key Considerations for Prometheus Configuration

*   **Target Discovery**: For larger or dynamic environments, `static_configs` becomes cumbersome. Prometheus supports service discovery mechanisms (e.g., Consul, Kubernetes, EC2) to automatically find targets.
*   **Authentication/Authorization**: For secure environments, you'll need to configure TLS and potentially other authentication methods.
*   **Relabeling**: The `relabel_configs` section is powerful for manipulating metadata of scraped targets, such as adding labels or filtering out unwanted metrics.
*   **Data Storage**: Prometheus stores data locally by default. For long-term storage, consider integrating with remote storage solutions.

By mastering the configuration of the Prometheus server, you lay the foundation for effective system monitoring and visualization.

## Supports

- [[skills/computing/systems-infrastructure/observability-operations/system-monitoring/microskills/prometheus-server-configuration|Prometheus Server Configuration]]
