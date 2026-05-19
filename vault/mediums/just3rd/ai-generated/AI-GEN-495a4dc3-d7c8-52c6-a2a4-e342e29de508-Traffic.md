---
type: "medium"
title: "Understanding Traffic as a Golden Signal"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/cloud-devops/platform-engineering/system-monitoring/microskills/traffic|Traffic]]"
---
# Understanding Traffic as a Golden Signal

In the world of system monitoring, understanding how your system is performing is crucial. We're focusing on the **Golden Signals**, which are four key metrics that provide a high-level view of your system's health. This lesson will dive into one of those signals: **Traffic**.

## What is Traffic in System Monitoring?

When we talk about **Traffic** in the context of system monitoring, we're referring to the **volume of requests** your system is receiving and processing. Think of it as the "busyness" of your application or service.

*   **Requests per second (RPS):** This is a common way to measure traffic. It tells you how many incoming requests your system is handling in a given second.
*   **Queries per second (QPS):** Similar to RPS, but often used in database contexts.
*   **Bandwidth:** For services that transfer large amounts of data, bandwidth usage can also be a measure of traffic.

### Why is Traffic a Golden Signal?

Traffic is a fundamental indicator of user activity and system load.

*   **Understanding Load:** An increase in traffic directly correlates to an increase in the workload on your servers. High traffic means more CPU, memory, and network resources are being consumed.
*   **Detecting Anomalies:** Sudden spikes or drops in traffic can signal important events.
    *   **Spikes:** Might indicate a successful marketing campaign, a viral event, or an attack (like a DDoS).
    *   **Drops:** Could point to a problem with your service, a widespread outage affecting your users, or a significant decrease in user interest.
*   **Capacity Planning:** Monitoring traffic patterns over time helps you predict future needs and ensure your system can handle anticipated loads.

## Practical Considerations for Monitoring Traffic

To effectively use traffic as a Golden Signal, you need to monitor it consistently and understand what normal looks like for your system.

### Where to Measure Traffic

You can measure traffic at various points in your system:

*   **Load Balancers:** This is a common and effective place to measure incoming traffic before it hits your application servers.
*   **Web Servers/Application Servers:** Measure the requests your individual servers are receiving.
*   **APIs:** Track the number of API calls made to your services.
*   **Databases:** Monitor the number of queries being executed.

### Tools for Monitoring Traffic

Most monitoring tools will provide capabilities to track traffic metrics. Examples include:

*   **Prometheus & Grafana:** A popular open-source combination for metrics collection and visualization.
*   **Datadog:** A commercial monitoring platform offering comprehensive metrics and alerting.
*   **New Relic:** Another commercial APM (Application Performance Monitoring) tool.
*   **Cloud Provider Metrics:** AWS CloudWatch, Google Cloud Monitoring, Azure Monitor all offer metrics for traffic.

### What to Look For

*   **Baseline:** Understand what your "normal" traffic looks like during different times of the day, week, or year.
*   **Trends:** Are you seeing a steady increase in traffic over time? This might be healthy growth or a sign you need to scale.
*   **Peaks and Valleys:** Identify expected peaks (e.g., during business hours) and unexpected ones.
*   **Sudden Changes:** Any abrupt, unexplained shifts in traffic volume are red flags that warrant investigation.

## Example: Monitoring Website Traffic

Imagine you're running a small e-commerce website.

*   **Normal Traffic:** On a typical weekday morning, your website receives around 100 requests per second (RPS).
*   **Sudden Spike:** Suddenly, the RPS jumps to 500.
    *   **Action:** You immediately check your monitoring dashboard. You see the traffic spike. This could be good (a flash sale went viral!) or bad (a bot is hammering your site).
    *   **Next Steps:** You'd then look at other Golden Signals. Are errors increasing? Is latency climbing? Is saturation high? This helps you determine the cause and impact.
*   **Sudden Drop:** Traffic plummets to 10 RPS.
    *   **Action:** This is also concerning. Is your website down? Is there a problem with your DNS?
    *   **Next Steps:** You'd check if users can actually access the site. Are there any deployment issues?

By monitoring traffic, you gain an early indication of potential issues or successes, allowing you to react quickly. It's the first step in understanding what's happening with your system.

## Supports

- [[skills/cloud-devops/platform-engineering/system-monitoring/microskills/traffic|Traffic]]
