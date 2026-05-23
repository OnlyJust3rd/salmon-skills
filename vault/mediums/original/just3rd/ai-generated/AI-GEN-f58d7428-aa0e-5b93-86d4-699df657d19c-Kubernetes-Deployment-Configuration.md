---
type: "medium"
title: "Kubernetes Deployment Configuration"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/platform-engineering/kubernetes/microskills/kubernetes-deployment-configuration|kubernetes-deployment-configuration]]"
learning-time-in-minutes: 3
---
# Kubernetes Deployment Configuration

This lesson focuses on the practical skill of configuring Kubernetes Deployments, a fundamental resource for managing stateless applications within your Kubernetes cluster. Understanding Deployments is crucial for reliably running and scaling your applications.

## What is a Kubernetes Deployment?

A Kubernetes Deployment provides a declarative way to manage stateless applications. It describes the *desired state* of your application, and the Kubernetes control plane works to maintain that state. Key features of Deployments include:

*   **Rolling Updates:** Safely update your application with zero downtime by gradually replacing old pods with new ones.
*   **Rollbacks:** Easily revert to a previous version of your application if a new deployment introduces issues.
*   **Scaling:** Adjust the number of application replicas (pods) to handle varying load.

## Core Concepts of a Deployment

A Deployment resource is defined in a YAML manifest. Here are the essential fields you'll encounter:

*   **`apiVersion`**: Specifies the Kubernetes API version, typically `apps/v1` for Deployments.
*   **`kind`**: Identifies the resource type, which is `Deployment`.
*   **`metadata`**: Contains identifying information like the `name` of the Deployment and any `labels`.
*   **`spec`**: This is where the core configuration resides.
    *   **`replicas`**: The desired number of identical pods to run.
    *   **`selector`**: Defines how the Deployment finds the pods it manages. It must match the labels defined in the Pod template.
    *   **`template`**: A blueprint for the pods that the Deployment will create.
        *   **`metadata.labels`**: Labels applied to the pods themselves. These *must* match the `spec.selector.matchLabels`.
        *   **`spec.containers`**: A list of containers to run within each pod.
            *   **`name`**: The name of the container.
            *   **`image`**: The container image to use (e.g., `nginx:latest`, `my-app:v1.2`).
            *   **`ports`**: Ports that the container exposes.

## Practical Configuration Example

Let's create a simple Deployment for a web application using the `nginx` image.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 3 # We want 3 instances of our Nginx pods
  selector:
    matchLabels:
      app: nginx # This selector must match the labels on the pods
  template:
    metadata:
      labels:
        app: nginx # These labels identify the pods managed by this Deployment
    spec:
      containers:
      - name: nginx-container
        image: nginx:1.25 # Using a specific version for stability
        ports:
        - containerPort: 80 # Nginx listens on port 80
```

### Applying the Deployment

Save the above content into a file named `nginx-deployment.yaml`. Then, apply it to your Kubernetes cluster using `kubectl`:

```bash
kubectl apply -f nginx-deployment.yaml
```

### Verifying the Deployment

You can check the status of your Deployment and the pods it creates:

*   **View Deployments:**
    ```bash
    kubectl get deployments
    ```
    This will show you information like the desired, current, up-to-date, and available replicas.

*   **View Pods:**
    ```bash
    kubectl get pods -l app=nginx
    ```
    This command uses the label selector we defined to list the pods associated with our Nginx application. You should see three pods in a `Running` state.

*   **Describe the Deployment (for more details):**
    ```bash
    kubectl describe deployment nginx-deployment
    ```
    This command provides a wealth of information about the Deployment, including its events, rollout history, and pod template.

## Common Configuration Options

### Resource Requests and Limits

To ensure stability and prevent resource starvation, it's critical to define resource requests and limits for your containers.

*   **`resources.requests`**: The minimum amount of CPU and memory that the container is guaranteed. Kubernetes uses this for scheduling.
*   **`resources.limits`**: The maximum amount of CPU and memory that the container can use. If a container exceeds its memory limit, it may be terminated. If it exceeds its CPU limit, it will be throttled.

Here's an updated `nginx-deployment.yaml` with resource requests and limits:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx-container
        image: nginx:1.25
        ports:
        - containerPort: 80
        resources:
          requests:
            memory: "64Mi"  # Request 64 Megabytes of memory
            cpu: "250m"     # Request 250 millicpu (0.25 CPU core)
          limits:
            memory: "128Mi" # Limit to 128 Megabytes of memory
            cpu: "500m"     # Limit to 500 millicpu (0.5 CPU core)
```

Apply this updated configuration:

```bash
kubectl apply -f nginx-deployment.yaml
```

### Rolling Update Strategies

Deployments support different strategies for updating your application. The default is `RollingUpdate`.

*   **`maxUnavailable`**: The maximum number of pods that can be unavailable during the update.
*   **`maxSurge`**: The maximum number of pods that can be created over the desired number of pods.

You can configure these in the `spec.strategy` field:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxUnavailable: 1  # Allow at most 1 pod to be unavailable
      maxSurge: 1        # Allow at most 1 extra pod to be created
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx-container
        image: nginx:1.25
        ports:
        - containerPort: 80
        resources:
          requests:
            memory: "64Mi"
            cpu: "250m"
          limits:
            memory: "128Mi"
            cpu: "500m"
```

## Next Steps

Experiment with updating the `replicas` count, changing the `image` to a different version, and observing how Kubernetes manages the updates. Understanding Deployments is a foundational skill for effectively managing applications on Kubernetes.

## Supports

- [[skills/computing/systems-infrastructure/platform-engineering/kubernetes/microskills/kubernetes-deployment-configuration|Kubernetes Deployment Configuration]]
