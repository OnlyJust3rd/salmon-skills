---
type: "medium"
title: "Kubernetes Job Configuration"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/cloud-devops/platform-engineering/kubernetes/microskills/kubernetes-job-configuration|kubernetes-job-configuration]]"
---
# Kubernetes Job Configuration

This lesson focuses on understanding and implementing Kubernetes Jobs, a core component for running batch or one-off tasks within your Kubernetes cluster. As part of implementing Kubernetes configurations, mastering Jobs ensures you can reliably execute workloads that complete and then terminate.

## What is a Kubernetes Job?

A Kubernetes `Job` is a controller that creates one or more Pods and continues to run them until a specified number of them successfully terminate. This makes Jobs ideal for tasks like:

*   Data processing or ETL (Extract, Transform, Load)
*   Batch computations
*   Database migrations
*   Scheduled maintenance tasks (though `CronJob` is often preferred for recurring tasks)

Unlike Deployments which aim to maintain a set of running Pods indefinitely, Jobs are designed for completion.

## Key Concepts of a Job

When defining a Job, you'll encounter several important fields within its specification:

*   **`completions`**: The number of Pods that must successfully complete before the Job is considered complete.
*   **`parallelism`**: The maximum number of Pods that can run in parallel at any given time.
*   **`backoffLimit`**: The number of retries before considering a Pod failed and marking the Job as failed.
*   **`template`**: This is the Pod template, defining the Pods that the Job will create. It includes the container image, commands, arguments, volumes, etc.

## Defining a Simple Kubernetes Job

Let's look at a basic example of a Job that runs a simple command.

```yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: simple-job-example
spec:
  template:
    spec:
      containers:
      - name: pi-calculator
        image: perl:5.34.0
        command: ["perl", "-Mbignum=bpi", "-wle", "print bpi(2000)"]
      restartPolicy: Never
  backoffLimit: 4
```

**Explanation:**

*   `apiVersion: batch/v1` and `kind: Job`: Standard Kubernetes object definition.
*   `metadata.name`: A unique name for your Job.
*   `spec.template.spec.containers`: Defines the container(s) that will run as part of the Job.
    *   `name`: Name of the container.
    *   `image`: The container image to use (here, `perl:5.34.0`).
    *   `command`: The command to execute inside the container. This specific command calculates the first 2000 digits of Pi.
*   `spec.template.spec.restartPolicy: Never`: This is crucial for Jobs. It ensures that if a container within a Job Pod fails, the Pod itself is not restarted by the Kubelet. Instead, the Job controller will create a *new* Pod if retries are allowed. Other options like `OnFailure` can be used if you want the container to restart within the same Pod on failure, but `Never` is common for ensuring distinct execution attempts.
*   `spec.backoffLimit: 4`: If the Pod fails (e.g., the command exits with a non-zero status), the Job will retry by creating up to 4 new Pods before giving up.

## Applying the Job

To create this Job in your Kubernetes cluster, save the YAML above to a file (e.g., `simple-job.yaml`) and run:

```bash
kubectl apply -f simple-job.yaml
```

## Monitoring the Job

You can check the status of your Job using `kubectl`:

```bash
kubectl get jobs
```

You should see output similar to:

```
NAME                COMPLETIONS   DURATION   AGE
simple-job-example  1/1           10s        20s
```

`COMPLETIONS` shows `1/1`, indicating the Job successfully completed one task.

To see the Pods created by the Job:

```bash
kubectl get pods --selector=job-name=simple-job-example
```

You'll see a Pod with a name like `simple-job-example-xxxxx`. You can then view its logs to see the output of the command:

```bash
kubectl logs <pod-name>
```

Replace `<pod-name>` with the actual name of the Pod.

## Advanced Job Configurations

### Parallelism and Completions

Jobs can be configured to run multiple Pods in parallel to speed up tasks.

```yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: parallel-job-example
spec:
  completions: 5 # The job is considered complete when 5 Pods succeed
  parallelism: 3 # At most 3 Pods will run at any given time
  template:
    spec:
      containers:
      - name: worker
        image: ubuntu:latest
        command: ["bash", "-c", "echo 'Processing item $HOSTNAME' && sleep 5"] # Simulate work
      restartPolicy: Never
  backoffLimit: 2
```

In this example, the Job will run until 5 Pods have successfully completed. It will try to run up to 3 Pods concurrently. The `backoffLimit` is set to 2, meaning each Pod will be retried twice before the Job might be marked as failed (if all retries fail).

### Handling Failures

The `backoffLimit` is crucial for resilience. If a Pod consistently fails, the Job controller will eventually stop creating new Pods after reaching the `backoffLimit` and mark the Job as failed. This prevents infinite retry loops.

### Job Completion Conditions

A Job can be configured with `success and failure conditions` to define more complex completion criteria. For instance, you might want a Job to succeed if at least N out of M Pods succeed, or to fail if any Pod exits with a specific error code. This is achieved using `completionMode: Indexed` and `completionMode: NonIndexed`.

*   **Non-Indexed (Default):** Any `N` Pods completing successfully will mark the Job as done. The Pods are not distinguished.
*   **Indexed:** Each Pod gets a unique index (0 to `completions-1`). This is useful for parallel processing where each worker needs to know its specific task index.

## When to Use Jobs vs. Other Controllers

*   **Jobs:** For tasks that need to run to completion. Think of discrete, finite operations.
*   **Deployments:** For long-running applications that need to be continuously available (e.g., web servers, APIs).
*   **StatefulSets:** For applications that require stable network identities and persistent storage, often used for databases or distributed systems.
*   **CronJobs:** For tasks that need to run on a recurring schedule. A `CronJob` itself manages `Job` resources, triggering them at predefined times.

By understanding and applying these Job configurations, you can effectively manage batch processing and one-off tasks within your Kubernetes environment, contributing to your ability to implement Kubernetes configurations for various workload types.

## Supports

- [[skills/cloud-devops/platform-engineering/kubernetes/microskills/kubernetes-job-configuration|Kubernetes Job Configuration]]
