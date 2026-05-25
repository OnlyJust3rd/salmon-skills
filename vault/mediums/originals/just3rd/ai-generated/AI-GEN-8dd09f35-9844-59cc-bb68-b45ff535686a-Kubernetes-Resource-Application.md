---
type: "medium"
title: "Applying Kubernetes Deployment Configurations"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/compute-runtime/kubernetes/microskills/kubernetes-resource-application|kubernetes-resource-application]]"
learning-time-in-minutes: 3
---
# Applying Kubernetes Deployment Configurations

This lesson focuses on the practical application of Kubernetes Deployment configurations within your cluster. You'll learn how to create and manage Deployments, which are fundamental to reliably running your containerized applications.

## Understanding Deployments

A Kubernetes Deployment is an API object that represents a desired state for your application. It allows you to describe how your application should run, including:

*   **The container image to use:** Which version of your application's Docker image should be deployed.
*   **The number of replicas:** How many instances of your application should be running.
*   **Update strategy:** How new versions of your application should be rolled out (e.g., rolling updates, recreate).

When you create a Deployment, Kubernetes works to ensure that the actual state of your application matches the desired state defined in the Deployment object. This includes automatically replacing any containers that fail or are terminated.

## The Deployment Manifest (YAML)

Deployments are typically defined in YAML files, which are the standard configuration format for Kubernetes objects. Here's a basic example of a Deployment manifest:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-nginx-deployment
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
        image: nginx:latest
        ports:
        - containerPort: 80
```

Let's break down the key parts of this manifest:

*   `apiVersion`: Specifies the Kubernetes API version being used. For Deployments, it's typically `apps/v1`.
*   `kind`: Identifies the type of Kubernetes object, which is `Deployment`.
*   `metadata`: Contains information about the Deployment, such as its `name`.
*   `spec`: This is where you define the desired state.
    *   `replicas`: The desired number of running Pods. In this case, 3.
    *   `selector`: This tells the Deployment which Pods it manages. It uses labels to match Pods.
    *   `template`: This section defines the Pod template, which is a blueprint for the Pods that the Deployment will create.
        *   `metadata.labels`: Labels applied to the Pods created by this Deployment. These are used by the `selector`.
        *   `spec.containers`: A list of containers to run within the Pod.
            *   `name`: A unique name for the container.
            *   `image`: The Docker image to use for the container.
            *   `ports`: A list of network ports the container exposes.

## Applying the Deployment

To apply this Deployment to your Kubernetes cluster, you'll use the `kubectl apply` command. First, save the YAML content above into a file named `nginx-deployment.yaml`.

Then, open your terminal and run:

```bash
kubectl apply -f nginx-deployment.yaml
```

Kubernetes will process this command and create the Deployment object.

## Verifying Your Deployment

After applying the manifest, you can check the status of your Deployment and the Pods it creates.

To view the Deployment:

```bash
kubectl get deployments
```

You should see your `my-nginx-deployment` listed with the desired and current number of replicas.

To view the Pods created by the Deployment:

```bash
kubectl get pods
```

You should see three Pods running, likely with names like `my-nginx-deployment-xxxxx-yyyyy`.

## Updating a Deployment

One of the key benefits of Deployments is their ability to manage application updates. Let's say you want to update the Nginx image to a specific version.

1.  **Modify the manifest:** Change `image: nginx:latest` to `image: nginx:1.21.6` in your `nginx-deployment.yaml` file.
2.  **Re-apply the manifest:**

    ```bash
    kubectl apply -f nginx-deployment.yaml
    ```

Kubernetes will perform a rolling update. By default, it will gradually replace old Pods with new ones, ensuring that your application remains available during the update.

You can monitor the progress of the update:

```bash
kubectl rollout status deployment/my-nginx-deployment
```

## Key Takeaways

*   Deployments define the desired state of your application in Kubernetes.
*   They are configured using YAML manifests.
*   `kubectl apply` is used to create or update Deployments.
*   Deployments manage Pod creation, scaling, and rolling updates.
*   Use `kubectl get deployments` and `kubectl get pods` to monitor their status.

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/kubernetes/microskills/kubernetes-resource-application|Kubernetes Resource Application]]
