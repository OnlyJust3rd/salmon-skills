---
type: "medium"
title: "Kubernetes CronJob Configuration"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/platform-engineering/kubernetes/microskills/kubernetes-cronjob-configuration|kubernetes-cronjob-configuration]]"
learning-time-in-minutes: 4
---
# Kubernetes CronJob Configuration

This lesson focuses on **defining and configuring Kubernetes CronJobs**. CronJobs are essential for scheduling recurring tasks within your Kubernetes cluster, automating operations like backups, reports, or system maintenance.

## What is a CronJob?

A Kubernetes CronJob is an API object that creates Jobs on a repeating schedule. It leverages the familiar cron syntax to define when a job should run. Each instance of a CronJob execution results in a Job, which then creates Pods to perform the actual work.

## Key Concepts

*   **Cron Format:** CronJobs use the standard cron format for scheduling:
    ```
    * * * * *
    - - - - -
    | | | | |
    | | | | ----- Day of week (0 - 6) (Sunday=0 or 7)
    | | | ------- Month (1 - 12)
    | | --------- Day of month (1 - 31)
    | ----------- Hour (0 - 23)
    ------------- Minute (0 - 59)
    ```
    For example, `0 0 * * *` runs a job every day at midnight. `*/15 * * * *` runs a job every 15 minutes.

*   **Job Object:** When a CronJob's schedule is met, it creates a Kubernetes Job. A Job ensures that one or more Pods complete successfully.

*   **Pod Lifecycle:** The Job manages the Pods that execute the task. If a Pod fails, the Job can be configured to retry.

*   **Concurrency Policy:** This setting determines how to handle concurrent executions of the same CronJob.

## Configuring a CronJob

Let's walk through creating a simple CronJob.

### Scenario: Daily Database Backup

Imagine you need to run a script daily at 2:00 AM to back up your database.

### YAML Definition

Here's a YAML manifest for a CronJob that achieves this:

```yaml
apiVersion: batch/v1
kind: CronJob
metadata:
  name: daily-db-backup
spec:
  schedule: "0 2 * * *"  # Run daily at 2:00 AM
  jobTemplate:
    spec:
      template:
        spec:
          containers:
          - name: backup-container
            image: your-backup-image:latest # Replace with your actual backup image
            command: ["/bin/sh", "-c"]
            args: ["echo 'Starting daily backup...' && sleep 30 && echo 'Backup complete.'"] # Placeholder command
          restartPolicy: OnFailure # Important for Jobs
```

**Explanation of Fields:**

*   `apiVersion`: Specifies the Kubernetes API version for CronJob.
*   `kind`: Set to `CronJob`.
*   `metadata.name`: A unique name for your CronJob.
*   `spec.schedule`: The cron schedule string. In this case, `0 2 * * *` means at minute 0 of hour 2, every day of the month, every month, and every day of the week.
*   `spec.jobTemplate`: This is a template for the Job that the CronJob will create.
    *   `spec.jobTemplate.spec.template.spec.containers`: Defines the containers that will run within the Pod created by the Job.
        *   `name`: Name of the container.
        *   `image`: The Docker image containing your backup script.
        *   `command` and `args`: The command to execute within the container. For a real backup, this would involve your backup utility.
    *   `spec.jobTemplate.spec.template.spec.restartPolicy`: Crucial for Jobs. `OnFailure` means the container will be restarted if it fails. `Never` means it won't restart. For CronJobs/Jobs, you generally don't want `Always` as the Job's purpose is to complete.

### Applying the Configuration

To apply this CronJob to your cluster, save the YAML to a file (e.g., `cronjob-backup.yaml`) and use `kubectl`:

```bash
kubectl apply -f cronjob-backup.yaml
```

### Verifying the CronJob

You can check if your CronJob has been created:

```bash
kubectl get cronjob daily-db-backup
```

To see the Jobs that have been created by the CronJob:

```bash
kubectl get jobs --selector=cronjob.kubernetes.io/name=daily-db-backup
```

And to view the Pods associated with those Jobs:

```bash
kubectl get pods --selector=job-name=<your-job-name> # Replace <your-job-name> with the actual job name from `kubectl get jobs`
```

## Advanced Configuration Options

### Concurrency Policy

The `concurrencyPolicy` field in `spec` controls how concurrently running jobs are handled.

*   `Allow` (default): Allows concurrent runs. Multiple jobs from the same CronJob can run simultaneously.
*   `Forbid`: Forbids concurrent runs. If a new job is scheduled while an old one is still running, the new job will be skipped.
*   `Replace`: Cancels currently running jobs and replaces them with the new one.

**Example:**

```yaml
spec:
  schedule: "*/5 * * * *"
  concurrencyPolicy: Forbid # Do not run if a previous one is still running
  jobTemplate:
    spec:
      # ... rest of your jobTemplate
```

### Suspend

You can temporarily pause a CronJob without deleting it:

```yaml
spec:
  schedule: "0 2 * * *"
  suspend: true # The CronJob will not run until this is set to false
  jobTemplate:
    spec:
      # ... rest of your jobTemplate
```

### Starting Deadline Seconds

If a job misses its scheduled time (e.g., due to cluster downtime), `startingDeadlineSeconds` can be set. If the job misses its scheduled time by more than this many seconds, the job will be skipped.

```yaml
spec:
  schedule: "0 2 * * *"
  startingDeadlineSeconds: 120 # If job is more than 2 minutes late, skip it
  jobTemplate:
    spec:
      # ... rest of your jobTemplate
```

### Retries

The `backoffLimit` in the `jobTemplate.spec` defines how many times a Pod will be retried before the Job is considered failed.

```yaml
spec:
  schedule: "0 2 * * *"
  jobTemplate:
    spec:
      template:
        spec:
          # ... containers
      backoffLimit: 4 # Retry up to 4 times if a Pod fails
```

## Common Pitfalls

*   **Incorrect Cron Syntax:** Double-check your schedule string. A common mistake is missing or extra asterisks.
*   **Image Not Found:** Ensure the `image` specified in the container spec exists and is accessible by your cluster.
*   **`restartPolicy`:** Forgetting to set `restartPolicy` to `OnFailure` or `Never` within the `jobTemplate.spec` can lead to unexpected Pod behavior if the container exits with an error.
*   **Permissions:** The Service Account used by the Pods needs appropriate permissions to perform its task, especially if it needs to interact with other Kubernetes resources.

By mastering CronJob configuration, you can effectively automate routine tasks within your Kubernetes environment, improving operational efficiency and reliability.

## Supports

- [[skills/computing/systems-infrastructure/platform-engineering/kubernetes/microskills/kubernetes-cronjob-configuration|Kubernetes CronJob Configuration]]
