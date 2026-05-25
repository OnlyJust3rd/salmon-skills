---
type: "medium"
title: "Kubernetes YAML Manifests: The Language of Kubernetes"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/compute-runtime/kubernetes/microskills/kubernetes-yaml-manifests|kubernetes-yaml-manifests]]"
related-skills:
  - "[[skills/computing/systems-infrastructure/compute-runtime/kubernetes/kubernetes|kubernetes]]"
learning-time-in-minutes: 4
---
# Kubernetes YAML Manifests: The Language of Kubernetes

To effectively deploy Kubernetes CronJobs, you need to understand how to communicate your desired state to Kubernetes. This is done using YAML (YAML Ain't Markup Language). YAML is a human-readable data serialization format that is widely used for configuration files and data exchange. In the context of Kubernetes, YAML manifests are the blueprints for creating and managing all Kubernetes resources, including CronJobs.

This lesson focuses on the fundamentals of writing Kubernetes YAML.

## Why YAML for Kubernetes?

*   **Human-Readable:** YAML's indentation-based structure makes it easy to read and understand compared to formats like JSON or XML.
*   **Declarative:** You declare what you want your resource to look like, and Kubernetes figures out how to achieve that state.
*   **Widely Adopted:** It's the standard for Kubernetes configuration.

## Core YAML Concepts for Kubernetes

Kubernetes YAML manifests have a specific structure. Here are the essential components:

### `apiVersion`

This field specifies the Kubernetes API version your object is using. Different resource types might be available under different API versions. For CronJobs, you'll typically see:

*   `batch/v1` (most common for CronJobs)

### `kind`

This field specifies the type of Kubernetes object you are creating. For this skill, the `kind` will be `CronJob`.

### `metadata`

This section contains data that helps uniquely identify the object, including a `name` and optionally `labels` and `annotations`.

*   `name`: A unique name for your CronJob within its namespace.
*   `labels`: Key-value pairs that can be used to group and select objects.

### `spec`

This is where you define the desired state of your object. For a CronJob, the `spec` includes configurations for how and when the job should run. Key fields within the `spec` for a CronJob are:

*   `schedule`: A cron-formatted string that defines when the job should run.
*   `jobTemplate`: This defines the template for the Job that will be created when the CronJob runs. It has its own `spec` which mirrors that of a standard Kubernetes `Job` object.

### `jobTemplate.spec`

This nested `spec` defines the actual work to be done. It contains fields like:

*   `template`: This is a Pod template. It defines the Pod(s) that will run your task.
    *   `spec`: The Pod's specification.
        *   `containers`: A list of containers to run in the Pod.
            *   `name`: The name of the container.
            *   `image`: The Docker image to use for the container.
            *   `command`: (Optional) The command to run inside the container.
            *   `args`: (Optional) Arguments for the command.
        *   `restartPolicy`: Determines when a container should be restarted. For Jobs and CronJobs, `OnFailure` or `Never` are common. `Always` is not allowed.

## Writing Your First CronJob YAML

Let's create a simple CronJob that runs a script every minute to print the current date and time.

```yaml
apiVersion: batch/v1
kind: CronJob
metadata:
  name: my-daily-backup
spec:
  schedule: "*/5 * * * *" # Runs every 5 minutes
  jobTemplate:
    spec:
      template:
        spec:
          containers:
          - name: backup-container
            image: ubuntu:latest # Using a common image, but you'd typically use a dedicated backup image
            command: ["/bin/bash", "-c"]
            args: ["date; echo 'Starting backup...'; sleep 30; echo 'Backup finished.'"]
          restartPolicy: OnFailure
```

### Deconstructing the Example

*   **`apiVersion: batch/v1`**: Specifies we are using the `batch` API group, version `v1`.
*   **`kind: CronJob`**: Declares this manifest is for a CronJob.
*   **`metadata.name: my-daily-backup`**: Names our CronJob.
*   **`spec.schedule: "*/5 * * * *"`**: This is a cron expression. It means "every 5 minutes".
    *   The fields represent: Minute (0-59), Hour (0-23), Day of Month (1-31), Month (1-12), Day of Week (0-7, where 0 and 7 are Sunday).
*   **`jobTemplate.spec.template.spec.containers`**: This defines the Pod that will be created by the Job.
    *   **`name: backup-container`**: The name of our container.
    *   **`image: ubuntu:latest`**: We're using the `ubuntu` image. In a real-world scenario, you'd use an image pre-built for your task (e.g., a database backup tool).
    *   **`command: ["/bin/bash", "-c"]`**: We're telling the container to run `/bin/bash` with the `-c` option, which allows us to execute a string as a command.
    *   **`args: ["date; echo 'Starting backup...'; sleep 30; echo 'Backup finished.'"]`**: This is the actual script that will run. It prints the date, a message, waits for 30 seconds, and prints another message.
*   **`restartPolicy: OnFailure`**: If the container exits with a non-zero status code (indicating failure), Kubernetes will attempt to restart it. This is suitable for jobs that should complete successfully.

## Applying YAML to Kubernetes

Once you have your YAML file (e.g., `cronjob.yaml`), you can apply it to your Kubernetes cluster using `kubectl`:

```bash
kubectl apply -f cronjob.yaml
```

To check the status of your CronJob:

```bash
kubectl get cronjob my-daily-backup
```

To see the Jobs created by the CronJob:

```bash
kubectl get jobs --selector=job-name=my-daily-backup
```

And to view the Pods created by those Jobs:

```bash
kubectl get pods --selector=job-name=my-daily-backup
```

## Key Takeaways

*   Kubernetes resources are defined using YAML manifests.
*   `apiVersion`, `kind`, `metadata`, and `spec` are fundamental fields.
*   The `spec.schedule` field uses cron syntax for timing.
*   The `jobTemplate` defines the Job that runs your task, and its `template` defines the Pod.
*   `kubectl apply -f <your-yaml-file>` is used to deploy your configurations.

Mastering YAML is crucial for managing Kubernetes resources effectively. Continue practicing with different resource types and configurations.

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/kubernetes/microskills/kubernetes-yaml-manifests|Kubernetes YAML Manifests]]
