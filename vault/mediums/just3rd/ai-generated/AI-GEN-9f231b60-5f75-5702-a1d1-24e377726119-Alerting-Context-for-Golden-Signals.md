---
type: "medium"
title: "Alerting Context for Golden Signals"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/cloud-devops/platform-engineering/system-monitoring/microskills/alerting-context-for-golden-signals|Alerting Context for Golden Signals]]"
---
# Alerting Context for Golden Signals

Understanding the "Golden Signals" is crucial for effective system monitoring. These four key metrics – Latency, Traffic, Errors, and Saturation – provide a high-level view of your system's health. This lesson focuses on how these Golden Signals directly inform the configuration of meaningful alerts.

## Why Golden Signals Matter for Alerting

Alerts are designed to notify you when something is wrong. If your alerts are too noisy (triggering for minor, inconsequential issues) or too silent (missing critical problems), they lose their value. The Golden Signals act as a robust foundation for defining alert thresholds because they represent fundamental aspects of user experience and system capacity.

By understanding the *meaning* and *typical behavior* of each Golden Signal for your specific system, you can set up alerts that are both sensitive to real problems and specific enough to avoid unnecessary distractions.

## Connecting Golden Signals to Alert Configuration

Let's break down how each Golden Signal translates into actionable alert configurations.

### 1. Latency

*   **Meaning:** The time it takes to serve a request. High latency means users are waiting longer.
*   **Alerting Context:**
    *   **Thresholds:** You'll want to set alerts for when latency exceeds acceptable user experience limits. This isn't a single fixed number; it depends on the type of request. For example, a critical API call might have a 100ms SLO (Service Level Objective), while a less critical background job might tolerate 5 seconds.
    *   **Averaging vs. Percentiles:** Alerting on the average latency can hide issues affecting a small but significant portion of users. It's often more effective to alert on the *95th or 99th percentile latency*. This means if 95% of requests are fast, but the slowest 5% are taking a very long time, your alert will fire.
    *   **Example Alert:**
        > Alert if the 95th percentile latency for `/api/v1/users` exceeds 500ms for more than 5 minutes.

### 2. Traffic

*   **Meaning:** The demand on your system, typically measured in requests per second, queries per second, or bandwidth.
*   **Alerting Context:**
    *   **Sudden Spikes/Drops:** Alerts on traffic are usually about detecting anomalies.
        *   **Spikes:** A sudden surge in traffic can indicate a successful marketing campaign, a denial-of-service (DoS) attack, or a runaway process. You might want to alert if traffic doubles unexpectedly.
        *   **Drops:** A sudden, unexplained drop in traffic can signify a problem with your load balancer, a widespread network issue, or a critical bug preventing users from accessing your service.
    *   **Example Alert:**
        > Alert if the requests per second for your web service drops by more than 30% in 10 minutes, compared to the previous hour's average.
        > Alert if the requests per second for your web service increases by more than 100% in 5 minutes, compared to the previous hour's average.

### 3. Errors

*   **Meaning:** The rate of requests that fail. This is often measured as the percentage of requests returning a server error (e.g., HTTP 5xx status codes) or application-specific error codes.
*   **Alerting Context:**
    *   **Error Rate Thresholds:** This is one of the most straightforward Golden Signals to alert on. You set a threshold for the *percentage* of errors.
    *   **Types of Errors:** You might want to differentiate between transient errors (which might recover on their own) and persistent errors. However, for initial alerting, a rising error rate is usually a critical signal.
    *   **Example Alert:**
        > Alert if the rate of HTTP 5xx errors for any service exceeds 1% for more than 2 minutes.

### 4. Saturation

*   **Meaning:** How "full" your service is. This refers to any resource that has a finite capacity, such as CPU, memory, disk I/O, network bandwidth, or even the number of available database connections or worker threads.
*   **Alerting Context:**
    *   **Predicting Overload:** Saturation alerts are often about being *proactive*. You want to know when a resource is nearing its limit *before* it starts causing latency or errors.
    *   **Thresholds (Slightly Different):** Instead of alerting on exceeding a capacity, you often alert when a resource is *approaching* capacity. A common pattern is to alert when a resource utilization reaches 70-80%.
    *   **Example Alert:**
        > Alert if the average CPU utilization across your application servers exceeds 80% for 15 minutes.
        > Alert if the number of free database connections drops below 10 for your primary database.

## Best Practices for Alerting with Golden Signals

*   **Know Your SLOs:** Your Service Level Objectives for latency and availability should directly inform your alert thresholds.
*   **Context is Key:** Alerts should provide enough context to understand the problem (e.g., "High latency on API X").
*   **Iterate:** Your initial alerts might be too sensitive or not sensitive enough. Monitor your alerts and adjust thresholds and conditions over time.
*   **Actionable Alerts:** Every alert should have a clear path to resolution. If an alert fires, someone should know what to do next.
*   **Avoid Alert Fatigue:** Too many non-actionable alerts will cause engineers to ignore them. Focus on critical signals.

By thoughtfully configuring alerts based on the Golden Signals, you transform raw system metrics into a proactive defense system, ensuring you are notified of potential issues before they impact your users.

## Supports

- [[skills/cloud-devops/platform-engineering/system-monitoring/microskills/alerting-context-for-golden-signals|Alerting Context for Golden Signals]]
