---
type: "medium"
title: "Timer Trigger Configuration"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/cloud-platforms/serverless-computing/microskills/timer-trigger-configuration|timer-trigger-configuration]]"
learning-time-in-minutes: 4
---
# Timer Trigger Configuration

Serverless functions can be scheduled to run automatically at specific intervals, much like cron jobs on a traditional server. This is achieved using **Timer Triggers**. This lesson focuses on how to configure these timer triggers to orchestrate scheduled executions of your serverless functions.

## What is a Timer Trigger?

A Timer Trigger allows you to execute a serverless function based on a schedule. Instead of waiting for an external event like an HTTP request or a message in a queue, the timer trigger initiates the function's execution at predefined times. This is incredibly useful for tasks that need to run periodically, such as:

*   Data cleanup or archival
*   Report generation
*   Scheduled data synchronization
*   Heartbeat checks for other services
*   Sending out periodic notifications

## Understanding the Schedule: CRON Expressions

Timer Triggers are configured using a specific format called **CRON expressions**. CRON is a time-based job scheduler in Unix-like operating systems, and serverless platforms often adopt a similar syntax for their timer triggers.

A CRON expression is a string of fields representing a date and time. The standard format includes six fields:

```
* * * * * *
┬ ┬ ┬ ┬ ┬ ┬
│ │ │ │ │ │
│ │ │ │ │ └─ Year (optional, depending on the system)
│ │ │ │ └─ Day of the week (0 - 7) (Sunday is both 0 and 7)
│ │ │ └─ Month (1 - 12)
│ │ └─ Day of the month (1 - 31)
│ └─ Hour (0 - 23)
└─ Minute (0 - 59)
```

Here's a breakdown of how you can use these fields:

*   **`*` (Asterisk):** Wildcard. Matches any value. For example, `*` in the minute field means "every minute."
*   **`,` (Comma):** Value list separator. For example, `1,3,5` in the hour field means "at 1 AM, 3 AM, and 5 AM."
*   **`-` (Hyphen):** Range of values. For example, `9-17` in the hour field means "from 9 AM to 5 PM."
*   **`/` (Slash):** Step values. For example, `*/15` in the minute field means "every 15 minutes." `0/5` in the minute field means "at 0, 5, 10, 15..." minutes past the hour.

### Common CRON Expression Examples:

| CRON Expression      | Description                             |
| :------------------- | :-------------------------------------- |
| `0 * * * * *`        | Every hour, at minute 0 (e.g., 1:00, 2:00) |
| `0 0 * * * *`        | Every day, at midnight                  |
| `0 0 12 * * *`       | Every day, at noon                      |
| `*/5 * * * * *`      | Every 5 minutes                         |
| `0 8 * * 1-5 *`      | Every weekday (Mon-Fri) at 8:00 AM     |
| `0 0 1 * * *`        | On the 1st day of every month at midnight |
| `0 0 1 1 * *`        | On January 1st at midnight              |

**Note:** The exact CRON syntax and supported fields (like the year) can vary slightly between different serverless platforms (e.g., Azure Functions, AWS Lambda, Google Cloud Functions). Always refer to the specific platform's documentation.

## Configuring a Timer Trigger

The configuration process for a timer trigger typically involves defining the schedule using a CRON expression within your serverless function's configuration. This is often done through:

1.  **Configuration Files:** Many platforms use a `function.json` or similar file to define function triggers and bindings.
2.  **Platform-Specific UI/Console:** Cloud providers offer consoles where you can visually configure triggers.
3.  **Infrastructure as Code (IaC):** Tools like Terraform or CloudFormation allow you to define triggers in code.

Let's look at a conceptual example using a `function.json` file (common in Azure Functions):

Imagine you have a Python function named `CleanupData` that you want to run every day at 2:30 AM.

```json
{
  "scriptFile": "__init__.py",
  "bindings": [
    {
      "name": "mytimer",
      "type": "timerTrigger",
      "direction": "in",
      "schedule": "0 30 2 * * *" // CRON expression: 0 minutes, 30 minutes past the hour, 2 AM, any day, any month, any day of the week
    }
  ]
}
```

In this example:

*   `"type": "timerTrigger"` specifies that this is a timer trigger.
*   `"schedule": "0 30 2 * * *"` is the CRON expression that sets the schedule to run daily at 2:30 AM.
*   The `name` property (`"mytimer"`) is how you will reference this trigger within your function code.

Your function code would then receive a timer object (e.g., `mytimer` in this case) when it's invoked by the trigger. This object might contain information about the invocation time.

## Practical Application and Considerations

When using timer triggers, consider the following:

*   **Time Zones:** Be mindful of the time zone your CRON expression is evaluated against. Most serverless platforms default to UTC. Ensure your schedule aligns with your desired local time by adjusting the CRON expression accordingly.
*   **Concurrency:** If your scheduled task takes longer than the interval between triggers, you might have overlapping executions. Understand how your platform handles concurrency for timer-triggered functions. You may need to implement logic to prevent multiple instances from running simultaneously if not desired.
*   **Idempotency:** Design your scheduled functions to be idempotent. This means that running the function multiple times with the same input should produce the same result. This is a good practice for any serverless function, but especially important for scheduled tasks where retries or unexpected re-invocations can occur.
*   **Error Handling:** Implement robust error handling within your scheduled functions. If a scheduled task fails, you need to know about it and potentially have a retry mechanism or alerting in place.

By mastering timer trigger configurations, you can effectively automate recurring tasks within your serverless applications, leading to more efficient and robust solutions.

## Supports

- [[skills/computing/systems-infrastructure/cloud-platforms/serverless-computing/microskills/timer-trigger-configuration|Timer Trigger Configuration]]
