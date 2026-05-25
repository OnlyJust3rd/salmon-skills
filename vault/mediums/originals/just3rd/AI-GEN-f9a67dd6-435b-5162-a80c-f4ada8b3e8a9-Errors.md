---
type: "medium"
title: "Understanding Errors as a Golden Signal"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/operations-reliability/observability/system-monitoring/microskills/errors|errors]]"
related-skills:
  - "[[skills/computing/systems-infrastructure/operations-reliability/observability/system-monitoring/system-monitoring|system-monitoring]]"
learning-time-in-minutes: 3
---
# Understanding Errors as a Golden Signal

In the world of system monitoring, we're always looking for ways to understand how our systems are performing. One of the most important frameworks for this is the concept of "Golden Signals." These are four key metrics that give us a clear picture of system health. While we'll touch on all four, this lesson specifically focuses on one crucial signal: **Errors**.

## What are Errors in System Monitoring?

When we talk about "Errors" as a Golden Signal, we're not just talking about a program crashing. We're referring to the **rate of failures** your system is experiencing. This is a direct indicator that something is wrong, and users or other systems might be encountering problems.

Think of it like this: if a website is showing a "500 Internal Server Error" to visitors, that's a very obvious error. But there are often more subtle errors happening under the hood that also impact performance and user experience.

*   **Definition:** Errors, as a Golden Signal, represent the rate of requests that fail. This includes any operation that doesn't complete successfully, regardless of whether it's a client-side issue or a server-side problem.

## Why are Errors a "Golden Signal"?

Errors are "golden" because they are often the most user-visible and impactful metric. When errors spike, users complain, transactions fail, and business suffers. Monitoring and understanding error rates is fundamental to maintaining a healthy and reliable system.

## Identifying Failure Rates

The core idea behind the "Errors" Golden Signal is to quantify how often things go wrong. This involves tracking various types of failures and presenting them as a rate (e.g., errors per second, errors per request).

Common types of errors to monitor include:

*   **HTTP Status Codes:** Particularly server-side error codes like `5xx` (e.g., `500 Internal Server Error`, `502 Bad Gateway`, `503 Service Unavailable`). While `4xx` codes are client errors, a sudden surge might indicate issues with your API's contract or common misconfigurations.
*   **Application-Specific Errors:** These are errors defined within your application's logic. This could be a failed database transaction, a timeout when calling another service, or an invalid input that your application cannot process.
*   **Exception Rates:** Tracking uncaught exceptions thrown by your application code.
*   **Background Job Failures:** If your system relies on background tasks, monitoring their failure rate is crucial.

## Practical Application: Tracking Error Rates

How do you actually track these errors? This usually involves instrumentation within your application or through dedicated monitoring tools.

**Example Scenario: A Web Service**

Imagine you have a web service that handles user requests. You want to track the rate of `500` errors.

1.  **Instrumentation:** Your web server framework or a custom library can intercept responses. When a `500` status code is returned, you increment a counter.
2.  **Aggregation:** This counter is sent to a monitoring system (like Prometheus, Datadog, New Relic, etc.).
3.  **Rate Calculation:** The monitoring system can then calculate the rate of these errors over a specific time period.

**Pseudocode for Instrumentation:**

```
function handle_request(request):
  try:
    response = process_request(request)
    if response.status_code >= 500:
      increment_metric("server_errors_total")
    return response
  except Exception as e:
    increment_metric("application_exceptions_total")
    log_error(e)
    return internal_server_error_response()

function process_request(request):
  // ... actual request processing logic ...
  if some_condition_fails:
    return Response(status_code=500, body="Internal processing error")
  // ...
  return Response(status_code=200, body="Success")

// In your monitoring system configuration:
// Define a rate metric for server errors
rate(server_errors_total[5m]) // Errors per second over the last 5 minutes
```

## Key Takeaways for Errors

*   **Focus on Rate:** It's not about the total number of errors, but the *rate* at which they occur. A small number of errors might be acceptable, but a sudden spike is a critical alert.
*   **Categorize:** Differentiate between various types of errors to pinpoint the root cause.
*   **Actionable:** High error rates demand immediate attention and investigation.

By understanding and actively monitoring error rates, you gain critical insight into the reliability and health of your systems, making you a more effective system monitor.

## Supports

- [[skills/computing/systems-infrastructure/operations-reliability/observability/system-monitoring/microskills/errors|Errors]]
