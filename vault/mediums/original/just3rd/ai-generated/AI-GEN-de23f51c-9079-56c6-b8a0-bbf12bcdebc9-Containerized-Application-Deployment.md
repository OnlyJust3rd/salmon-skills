---
type: "medium"
title: "Deploying Containerized Applications with Kubernetes Deployments"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/platform-engineering/kubernetes/microskills/containerized-application-deployment|containerized-application-deployment]]"
learning-time-in-minutes: 4
---
# Deploying Containerized Applications with Kubernetes Deployments

This lesson focuses on the practical skill of deploying containerized applications using Kubernetes Deployments. We'll explore the core components and how to apply them to get your application running reliably within a Kubernetes cluster.

## Understanding the Need for Deployments

When you have a containerized application (like a web server, an API, or a background worker), you need a way to manage its lifecycle within Kubernetes. Simply running a container isn't enough. You need to:

*   **Ensure Availability:** If a container crashes, it should be restarted.
*   **Manage Updates:** Roll out new versions of your application without downtime.
*   **Scale Your Application:** Easily increase or decrease the number of running instances based on demand.
*   **Maintain Desired State:** Guarantee that a specific number of application instances are always running.

Kubernetes **Deployments** are the declarative API object designed to handle all these requirements. They provide a robust way to manage stateless applications.

## The Core Components of a Deployment

A Kubernetes Deployment is defined in a YAML manifest file. Let's break down the essential parts:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-nginx-deployment  # A unique name for your deployment
spec:
  replicas: 3              # The desired number of application instances (Pods)
  selector:
    matchLabels:
      app: nginx           # How the Deployment finds the Pods it manages
  template:                # The Pod template, defining what Pods to create
    metadata:
      labels:
        app: nginx         # Labels applied to each Pod
    spec:
      containers:
      - name: nginx-container  # Name of the container within the Pod
        image: nginx:latest    # The container image to use
        ports:
        - containerPort: 80    # The port the application listens on inside the container
```

Let's unpack these sections:

*   **`apiVersion` and `kind`**: These standard Kubernetes fields identify the object type. `apps/v1` is the current API version for Deployments, and `Deployment` specifies we're creating a Deployment object.
*   **`metadata`**:
    *   `name`: A unique identifier for this specific Deployment within your Kubernetes namespace.
*   **`spec`**: This is where you define the desired state for your Deployment.
    *   `replicas`: This is a crucial field. It tells Kubernetes how many identical copies (Pods) of your application you want running at all times.
    *   `selector`: This is how the Deployment knows which Pods belong to it. It uses labels to find matching Pods.
    *   `template`: This is the blueprint for the Pods that the Deployment will create and manage.
        *   `metadata.labels`: These labels are attached to the Pods. The `spec.selector.matchLabels` must match these labels for the Deployment to manage the Pods.
        *   `spec.containers`: This is a list of containers that will run inside each Pod.
            *   `name`: A name for the container.
            *   `image`: The Docker image (or other OCI-compatible image) to pull and run for this container. `nginx:latest` means you want the most recent version of the Nginx image.
            *   `ports`: Specifies the network ports your application exposes inside the container. `containerPort: 80` is common for web servers.

## Applying the Deployment

To deploy this manifest, you'll use the `kubectl apply` command.

**Prerequisites:**

*   A running Kubernetes cluster.
*   `kubectl` configured to connect to your cluster.

**Steps:**

1.  **Save the manifest:** Save the YAML content above into a file named `nginx-deployment.yaml`.
2.  **Apply the manifest:** Open your terminal and run the following command:

    ```bash
    kubectl apply -f nginx-deployment.yaml
    ```

    Kubernetes will read this file and create the Deployment object.

3.  **Verify the Deployment:** Check the status of your Deployment:

    ```bash
    kubectl get deployments
    ```

    You should see an entry for `my-nginx-deployment` with the desired number of replicas and currently available ones.

4.  **Check the Pods:** Deployments create Pods. You can see them with:

    ```bash
    kubectl get pods
    ```

    You should see 3 Pods named something like `my-nginx-deployment-xxxxx-yyyyy`, all in a `Running` state.

5.  **Inspect the Deployment details:** Get more information about your Deployment:

    ```bash
    kubectl describe deployment my-nginx-deployment
    ```

    This command shows detailed information, including events, status, and the Pod template.

## Common Scenarios and Best Practices

*   **Updating an Application:** To update your application, modify the `image` field in your `nginx-deployment.yaml` file to a new version (e.g., `nginx:1.21`). Then, re-run `kubectl apply -f nginx-deployment.yaml`. Kubernetes will automatically perform a rolling update, replacing old Pods with new ones gradually to minimize downtime.
*   **Scaling:** To scale your application to 5 replicas, change `replicas: 3` to `replicas: 5` in the YAML, save, and run `kubectl apply -f nginx-deployment.yaml` again.
*   **Resource Limits:** For production environments, always define `resources.requests` and `resources.limits` for your containers to manage CPU and memory usage. This prevents one application from hogging cluster resources and improves stability.

    ```yaml
    containers:
    - name: nginx-container
      image: nginx:latest
      ports:
      - containerPort: 80
      resources:
        requests:
          memory: "64Mi"
          cpu: "250m" # 250 millicores, or 1/4 of a CPU core
        limits:
          memory: "128Mi"
          cpu: "500m" # 500 millicores, or 1/2 of a CPU core
    ```

*   **Health Checks (Probes):** Deployments can define readiness and liveness probes.
    *   **Liveness Probe:** Checks if your container is running. If it fails, Kubernetes will restart the container.
    *   **Readiness Probe:** Checks if your container is ready to serve traffic. If it fails, Kubernetes will temporarily stop sending traffic to that Pod.

By mastering Kubernetes Deployments, you gain a powerful tool for managing and reliably running your containerized applications at scale.

## Supports

- [[skills/computing/systems-infrastructure/platform-engineering/kubernetes/microskills/containerized-application-deployment|Containerized Application Deployment]]
