---
type: "medium"
title: "Defining Kubernetes CronJob Resources"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/cloud-devops/platform-engineering/kubernetes/microskills/cronjob-resource-definition|CronJob Resource Definition]]"
---
# Defining Kubernetes CronJob Resources

This lesson focuses on the core of automating tasks in Kubernetes: defining a CronJob resource. We'll explore the essential fields and how to configure them to schedule jobs effectively.

## What is a CronJob?

In Kubernetes, a `CronJob` is a resource that creates `Jobs` on a repeating schedule. Think of it as a way to automate recurring tasks within your cluster, similar to cron jobs in traditional Linux systems. Each execution of a CronJob results in a Job object, which in turn runs one or more Pods to complete the task.

## Key Components of a CronJob Definition

A `CronJob` resource is defined in a YAML file. The most critical sections are:

*   **`apiVersion`**: Specifies the Kubernetes API version. For CronJobs, this is typically `batch/v1`.
*   **`kind`**: Identifies the resource type as `CronJob`.
*   **`metadata`**: Contains identifying information like the `name` of the CronJob.
*   **`spec`**: This is where the core configuration of your CronJob resides. It includes:
    *   **`schedule`**: The heart of the CronJob. It defines when the job should run using a standard cron format.
    *   **`jobTemplate`**: A template for the Job that will be created. This contains the specification for the Pods that will execute your task.
    *   **`concurrencyPolicy`** (optional): Controls how concurrently running Jobs from the same CronJob are handled.
    *   **`suspend`** (optional): A boolean flag to temporarily pause the CronJob.
    *   **`successfulJobsHistoryLimit`** and **`failedJobsHistoryLimit`** (optional): Controls how many completed or failed Jobs are retained.

## The `schedule` Field: Mastering Cron Syntax

The `schedule` field uses the standard cron format, which consists of five fields separated by spaces:

```
* * * * *
- - - - -
| | | | |
| | | | ----- Day of week (0 - 7) (Sunday is both 0 and 7)
| | | ------- Month (1 - 12)
| | --------- Day of month (1 - 31)
| ----------- Hour (0 - 23)
------------- Minute (0 - 59)
```

**Examples:**

*   `*/5 * * * *`: Run every 5 minutes.
*   `0 0 * * *`: Run at midnight every day.
*   `0 22 * * 1-5`: Run at 10 PM every weekday (Monday to Friday).
*   `30 10 1 * *`: Run at 10:30 AM on the 1st of every month.

## The `jobTemplate` Field: Defining the Task

The `jobTemplate` section defines the `Job` that will be created. It has its own `spec` that dictates how the Job runs, which primarily includes:

*   **`template`**: This is a Pod template, similar to what you'd find in a Deployment. It specifies the Pods to run, including:
    *   **`spec`**: Defines the containers, volumes, and other Pod configurations. This is where you specify the container image to run your task and any commands or arguments.

## `concurrencyPolicy` Explained

This field determines what happens if a new Job is scheduled while a previous one is still running.

*   **`Allow`** (default): Allows concurrently running Jobs.
*   **`Forbid`**: Skips the new Job if an existing Job is still running.
*   **`Replace`**: Cancels the currently running Job and replaces it with the new one.

## `suspend` and History Limits

*   **`suspend`**: Setting `suspend: true` will stop the CronJob from creating new Jobs. It's useful for temporarily disabling scheduled tasks without deleting the CronJob resource.
*   **`successfulJobsHistoryLimit`**: The maximum number of successfully completed Jobs to keep.
*   **`failedJobsHistoryLimit`**: The maximum number of failed Jobs to keep.

By default, Kubernetes keeps 3 successful Jobs and 1 failed Job. Setting these to `0` means no Jobs will be kept after they complete or fail.

## A Practical Example

Let's define a CronJob that runs a simple `echo` command every minute.

```yaml
apiVersion: batch/v1
kind: CronJob
metadata:
  name: hello-cronjob
spec:
  schedule: "*/1 * * * *"  # Run every minute
  jobTemplate:
    spec:
      template:
        spec:
          containers:
          - name: hello-container
            image: ubuntu:latest
            command: ["/bin/sh", "-c", "echo 'Hello from Kubernetes CronJob!' && sleep 10"]
          restartPolicy: OnFailure
  concurrencyPolicy: Forbid
  successfulJobsHistoryLimit: 3
  failedJobsHistoryLimit: 1
```

**Breakdown:**

*   `schedule: "*/1 * * * *"`: This tells Kubernetes to execute the job every minute.
*   `jobTemplate.spec.template.spec.containers`: Defines the Pod that will run the task.
    *   `name: hello-container`: A name for our container.
    *   `image: ubuntu:latest`: We're using the `ubuntu` image.
    *   `command: ["/bin/sh", "-c", "echo 'Hello from Kubernetes CronJob!' && sleep 10"]`: This command will execute a shell script. It prints a message and then sleeps for 10 seconds. This `sleep` is important to simulate a task that takes some time to complete.
*   `restartPolicy: OnFailure`: This ensures that if the container exits with a non-zero status (indicating failure), the Job will attempt to restart it.
*   `concurrencyPolicy: Forbid`: If the previous minute's job is still running (unlikely with a 10-second sleep, but good practice for longer tasks), the new job will be skipped.
*   `successfulJobsHistoryLimit: 3` and `failedJobsHistoryLimit: 1`: We're keeping the last 3 successful jobs and the last 1 failed job for inspection.

## Applying the CronJob

To deploy this CronJob, save the YAML content to a file (e.g., `hello-cronjob.yaml`) and use `kubectl apply`:

```bash
kubectl apply -f hello-cronjob.yaml
```

You can then monitor its execution:

```bash
kubectl get cronjob hello-cronjob
kubectl get jobs --watch
kubectl logs <pod-name> -c hello-container
```

This lesson covered the fundamental aspects of defining a Kubernetes CronJob resource. By understanding the `schedule` syntax and the structure of `jobTemplate`, you can begin automating recurring tasks within your cluster.

## Supports

- [[skills/cloud-devops/platform-engineering/kubernetes/microskills/cronjob-resource-definition|CronJob Resource Definition]]
