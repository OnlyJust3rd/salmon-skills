---
type: "medium"
title: "Kubernetes Deployment Manifests: Your Blueprint for Application Deployment"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/cloud-devops/platform-engineering/kubernetes/microskills/kubernetes-deployment-manifests|Kubernetes Deployment Manifests]]"
---
# Kubernetes Deployment Manifests: Your Blueprint for Application Deployment

In Kubernetes, a **Deployment** is a core object that manages the deployment and scaling of your stateless applications. To tell Kubernetes *how* to deploy your application, you need to provide a **Deployment Manifest**. This manifest is a YAML file that describes the desired state of your Deployment. Think of it as a blueprint that Kubernetes reads and then works to achieve.

## What is a Kubernetes Deployment Manifest?

A Deployment manifest is a YAML file that defines:

*   **The desired number of replicas:** How many instances of your application should be running.
*   **The container image to use:** Which version of your application's container image Kubernetes should pull.
*   **Update strategies:** How Kubernetes should handle updates to your application (e.g., rolling updates).
*   **Rollback mechanisms:** How to revert to a previous version if an update goes wrong.

## Core Components of a Deployment Manifest

Let's break down the essential parts of a Deployment manifest.

### 1. `apiVersion` and `kind`

Every Kubernetes object definition starts with these. For Deployments, they are:

```yaml
apiVersion: apps/v1
kind: Deployment
```

*   `apiVersion`: Specifies the Kubernetes API version this object belongs to. `apps/v1` is the current stable version for Deployments.
*   `kind`: Identifies the type of Kubernetes object you are defining.

### 2. `metadata`

This section provides identifying information for your Deployment.

```yaml
metadata:
  name: my-webapp-deployment
  labels:
    app: my-webapp
```

*   `name`: A unique name for your Deployment within the Kubernetes namespace.
*   `labels`: Key-value pairs that help you organize and select Kubernetes objects. In this example, `app: my-webapp` labels the Deployment, and this label can be used by other Kubernetes objects (like Services) to find this Deployment.

### 3. `spec`

This is the most important section, as it defines the desired state of your Deployment.

```yaml
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-webapp
  template:
    metadata:
      labels:
        app: my-webapp
    spec:
      containers:
      - name: my-webapp-container
        image: nginx:latest
        ports:
        - containerPort: 80
```

Let's dissect the `spec` further:

*   **`replicas`**: This field specifies the desired number of Pods that should be running for your application. In the example above, `replicas: 3` means Kubernetes will ensure three instances of your application are always active.

*   **`selector`**: This tells the Deployment controller which Pods it manages. It uses `matchLabels` to identify Pods that have the specified labels. Critically, **the labels defined in `selector.matchLabels` MUST match the labels defined in `template.metadata.labels`**. This is how the Deployment finds and manages the Pods it creates.

*   **`template`**: This is a blueprint for the Pods that the Deployment will create.

    *   **`template.metadata.labels`**: These are the labels applied to each Pod created by this Deployment. As mentioned, these *must* match the `selector.matchLabels`.

    *   **`template.spec`**: This defines the actual specification of the Pods.
        *   **`containers`**: A list of containers to run within the Pod.
            *   **`name`**: A name for the container (e.g., `my-webapp-container`).
            *   **`image`**: The container image to use (e.g., `nginx:latest`). This is the image that Kubernetes will pull from a container registry.
            *   **`ports`**: A list of network ports that the container listens on.
                *   **`containerPort`**: The port number inside the container (e.g., `80` for Nginx).

## A Complete Example

Here's a more complete Deployment manifest for a simple web application:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 2 # We want 2 instances of our Nginx web server
  selector:
    matchLabels:
      app: nginx # This Deployment manages Pods with the label 'app: nginx'
  template:
    metadata:
      labels:
        app: nginx # Pods created by this Deployment will have the label 'app: nginx'
    spec:
      containers:
      - name: nginx-container
        image: nginx:1.21.6 # Using a specific version of the Nginx image
        ports:
        - containerPort: 80 # Nginx listens on port 80 inside the container
        resources: # It's good practice to define resource requests and limits
          requests:
            memory: "64Mi"
            cpu: "250m" # 250 millicores (1/4 of a CPU core)
          limits:
            memory: "128Mi"
            cpu: "500m" # 500 millicores (1/2 of a CPU core)
```

### Applying this Manifest

Once you have this YAML file saved (e.g., as `nginx-deployment.yaml`), you can apply it to your Kubernetes cluster using the `kubectl apply` command:

```bash
kubectl apply -f nginx-deployment.yaml
```

Kubernetes will then create the Deployment object and start creating the specified number of Pods based on the template. You can check the status of your deployment and pods with:

```bash
kubectl get deployments
kubectl get pods
```

## Key Takeaways

*   A Deployment manifest is your declarative instruction for Kubernetes on how to run your application.
*   It specifies the desired number of replicas, the container image, and how updates should be handled.
*   The `selector` and `template.metadata.labels` must match for the Deployment to manage Pods correctly.
*   Including `resources.requests` and `resources.limits` is a best practice for managing cluster resources efficiently.

## Supports

- [[skills/cloud-devops/platform-engineering/kubernetes/microskills/kubernetes-deployment-manifests|Kubernetes Deployment Manifests]]
