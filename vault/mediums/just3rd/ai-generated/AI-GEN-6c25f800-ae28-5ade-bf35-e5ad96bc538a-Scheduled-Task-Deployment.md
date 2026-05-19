---
type: "medium"
title: "Deploying Scheduled Tasks with Kubernetes CronJobs"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/cloud-devops/platform-engineering/kubernetes/microskills/scheduled-task-deployment|Scheduled Task Deployment]]"
---
# Deploying Scheduled Tasks with Kubernetes CronJobs

This lesson focuses on how to deploy automated tasks within a Kubernetes cluster using CronJobs. We'll cover the core concepts, practical implementation, and common considerations.

## What is a CronJob?

In Kubernetes, a `CronJob` is an object that creates Jobs on a repeating schedule. Think of it as an automated task runner that executes specific commands or scripts at predefined times. This is incredibly useful for tasks like:

*   **Database backups:** Regularly backing up your application's database.
*   **Log rotation:** Archiving or deleting old logs to manage storage.
*   **Report generation:** Creating daily, weekly, or monthly reports.
*   **Data synchronization:** Syncing data between different systems.
*   **Periodic cleanup tasks:** Removing temporary files or expired resources.

A `CronJob` works by defining a schedule (using cron syntax) and a Job template. When the schedule is met, Kubernetes creates a new `Job` object based on this template, which then creates one or more `Pods` to execute the defined task.

## Cron Syntax

CronJobs use standard cron syntax for scheduling. The syntax consists of five fields, separated by spaces, representing:

1.  **Minute** (0-59)
2.  **Hour** (0-23)
3.  **Day of the month** (1-31)
4.  **Month** (1-12)
5.  **Day of the week** (0-6, where 0 is Sunday)

Here are some common examples:

*   `* * * * *`: Every minute.
*   `0 * * * *`: At the start of every hour.
*   `0 0 * * *`: At midnight every day.
*   `0 0 1 * *`: At midnight on the 1st of every month.
*   `0 0 * * 1`: At midnight every Monday.
*   `*/5 * * * *`: Every 5 minutes.

You can find more detailed explanations and online cron expression generators if you need complex schedules.

## Creating a CronJob

To create a CronJob, you'll define a YAML manifest. Here's a basic example that runs a simple command every minute:

```yaml
apiVersion: batch/v1
kind: CronJob
metadata:
  name: my-scheduled-task
spec:
  schedule: "*/1 * * * *"
  jobTemplate:
    spec:
      template:
        spec:
          containers:
          - name: task-container
            image: busybox:latest
            command: ["/bin/sh", "-c", "date; echo Hello from the Kubernetes CronJob"]
          restartPolicy: OnFailure
```

Let's break down this YAML:

*   `apiVersion`: Specifies the Kubernetes API version for `CronJob` objects.
*   `kind`: Declares this resource as a `CronJob`.
*   `metadata`: Contains the name of your CronJob.
*   `spec`:
    *   `schedule`: Defines the cron schedule. In this case, `*/1 * * * *` means every minute.
    *   `jobTemplate`: This is the blueprint for the `Job` that will be created.
        *   `spec.template`: This is the blueprint for the `Pod` that the `Job` will create.
            *   `spec.containers`: Defines the containers to run within the Pod.
                *   `name`: A name for the container.
                *   `image`: The Docker image to use. Here, `busybox:latest` is a small image good for simple commands.
                *   `command`: The command to execute. We're using `/bin/sh -c` to run a shell command that prints the date and a message.
            *   `restartPolicy`: Specifies how Pods created by the Job should be restarted. `OnFailure` means the Pod will be restarted if the container exits with a non-zero status.

## Applying the CronJob

To deploy this CronJob to your Kubernetes cluster, save the YAML content to a file (e.g., `cronjob.yaml`) and use `kubectl`:

```bash
kubectl apply -f cronjob.yaml
```

## Verifying Your CronJob

You can check the status of your CronJob and its associated Jobs and Pods using `kubectl`:

*   **List CronJobs:**
    ```bash
    kubectl get cronjob
    ```
    You should see `my-scheduled-task` listed.

*   **View CronJob details:**
    ```bash
    kubectl describe cronjob my-scheduled-task
    ```
    This will show you the schedule, the Job template, and recent Job history.

*   **List Jobs created by the CronJob:**
    ```bash
    kubectl get jobs
    ```
    You'll see Jobs appearing periodically.

*   **List Pods created by the Jobs:**
    ```bash
    kubectl get pods
    ```
    You'll see Pods running and completing for each Job.

*   **View logs of a specific Pod:**
    ```bash
    kubectl logs <pod-name>
    ```
    Replace `<pod-name>` with the actual name of a Pod created by your CronJob to see the output of your scheduled task.

## Important Considerations

*   **`concurrencyPolicy`**: This field determines how to handle concurrent Job executions. The default is `Allow`, meaning multiple Jobs can run concurrently. Other options are `Forbid` (don't start a new Job if one is already running) and `Replace` (cancel the currently running Job and replace it with a new one).
*   **`successfulJobsHistoryLimit`** and **`failedJobsHistoryLimit`**: These fields control how many completed and failed Jobs are kept. By default, Kubernetes keeps 3 successful and 1 failed Job. Adjusting these can help manage cluster resources.
*   **Time Zones**: CronJobs by default use the time zone of the Kubernetes controller manager. If you need specific time zone behavior, it's an advanced configuration that might require setting up local time zones within your container images or relying on external scheduling mechanisms.
*   **Resource Limits**: Always define resource requests and limits for your container within the `jobTemplate`. This prevents your scheduled tasks from consuming excessive cluster resources.

By mastering `CronJob` deployment, you gain a powerful tool for automating routine operations within your Kubernetes environment, making your applications more robust and efficient.

## Supports

- [[skills/cloud-devops/platform-engineering/kubernetes/microskills/scheduled-task-deployment|Scheduled Task Deployment]]
