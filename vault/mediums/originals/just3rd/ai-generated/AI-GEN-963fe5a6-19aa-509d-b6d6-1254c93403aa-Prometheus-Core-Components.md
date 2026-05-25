---
type: "medium"
title: "Prometheus Core Components"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/operations-reliability/observability/system-monitoring/microskills/prometheus-core-components|prometheus-core-components]]"
related-skills:
  - "[[skills/computing/systems-infrastructure/operations-reliability/observability/system-monitoring/system-monitoring|system-monitoring]]"
learning-time-in-minutes: 4
---
# Prometheus Core Components

Prometheus is an open-source systems monitoring and alerting toolkit. Understanding its core components is crucial for effectively monitoring your systems. This lesson focuses on remembering the key architectural elements of Prometheus.

## What is Prometheus?

At its heart, Prometheus is designed to collect and store metrics, which are numerical measurements of a system's state over time. It's widely used for monitoring dynamic, containerized environments.

## Core Components of Prometheus

Prometheus has a modular architecture, with several distinct components working together. Knowing these components will help you understand how Prometheus gathers, stores, and processes your monitoring data.

### 1. Prometheus Server

The Prometheus Server is the central piece of the Prometheus ecosystem. It's responsible for:

*   **Scraping:** Fetching metrics from configured targets.
*   **Storage:** Storing the collected time-series data.
*   **Querying:** Providing a query language (PromQL) to access the stored data.
*   **Alerting:** Evaluating alerting rules and triggering alerts.

The Prometheus server itself can be run as a single binary, but for high availability and scalability, it's often deployed with additional components.

### 2. Exporters

Exporters are standalone applications that expose metrics in a Prometheus-compatible format. They are the bridge between your systems (applications, databases, hardware) and Prometheus.

Think of them as specialized translators. Your application might track internal metrics, but it needs an exporter to translate those metrics into a format Prometheus can understand and scrape.

Common examples include:

*   **Node Exporter:** Collects hardware and OS metrics from Linux hosts (CPU usage, memory, disk I/O, network statistics).
*   **Blackbox Exporter:** Probes endpoints over HTTP, HTTPS, TCP, ICMP, and DNS to monitor services from an external perspective.
*   **Application-specific exporters:** Many popular applications (like databases, message queues, web servers) have dedicated exporters.

### 3. Service Discovery

In dynamic environments, targets (the systems you want to monitor) can appear and disappear frequently. Service discovery allows Prometheus to automatically find these targets. Instead of manually configuring every IP address and port, Prometheus can query a service discovery mechanism.

Prometheus supports various service discovery integrations, including:

*   **Kubernetes SD:** Integrates with Kubernetes API to discover pods and services.
*   **Consul SD:** Integrates with HashiCorp Consul.
*   **File SD:** Reads targets from static configuration files.
*   **Cloud Provider SD:** Integrates with AWS EC2, Azure VM, and Google Compute Engine.

### 4. Pushgateway (Optional)

The Pushgateway is a Prometheus component that supports ephemeral jobs or batch jobs, which short-lived and do not expose metrics continuously. For such jobs, the Pushgateway acts as a buffer: the jobs push their metrics to the Pushgateway, and Prometheus then scrapes the Pushgateway.

It's important to note that the Pushgateway is generally **not** recommended for monitoring long-running services. For those, direct scraping by the Prometheus server is the standard and preferred method.

### 5. Alertmanager

The Alertmanager handles alerts sent by Prometheus servers. Its responsibilities include:

*   **Deduplication:** Grouping similar alerts together.
*   **Grouping:** Combining alerts into single notifications.
*   **Inhibition:** Silencing alerts based on other alerts.
*   **Silencing:** Temporarily muting alerts.
*   **Routing:** Sending alerts to the correct receiver (e.g., email, Slack, PagerDuty).

Prometheus servers evaluate alerting rules and send the resulting alerts to the Alertmanager.

## How They Work Together

1.  **Service Discovery:** Prometheus uses its configured service discovery mechanism to find targets.
2.  **Scraping:** The Prometheus Server (or remote write endpoints) scrapes metrics from these discovered targets (or exporters).
3.  **Storage:** The Prometheus Server stores the collected time-series data in its local time-series database.
4.  **Querying:** Users can query this data using PromQL through the Prometheus UI or integrated tools like Grafana.
5.  **Alerting:** Prometheus Server evaluates configured alerting rules. If a rule is met, it sends an alert to the Alertmanager.
6.  **Notification:** The Alertmanager processes the alert, groups/deduplicates/inhibits it, and routes it to the appropriate receiver.

## Key Takeaways

Remember these core components and their roles:

*   **Prometheus Server:** The brain, scraping, storing, querying, and initiating alerts.
*   **Exporters:** The translators, exposing metrics from systems.
*   **Service Discovery:** The finder, automatically locating targets.
*   **Pushgateway:** The buffer for ephemeral jobs.
*   **Alertmanager:** The communicator, handling and routing alerts.

## Supports

- [[skills/computing/systems-infrastructure/operations-reliability/observability/system-monitoring/microskills/prometheus-core-components|Prometheus Core Components]]
