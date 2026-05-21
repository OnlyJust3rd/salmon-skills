---
type: "medium"
title: "Defining Kubernetes Pods with YAML"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/cloud-devops/platform-engineering/kubernetes/microskills/kubernetes-pod-definition|kubernetes-pod-definition]]"
---
# Defining Kubernetes Pods with YAML

This lesson focuses on the fundamental skill of defining a Kubernetes Pod using YAML. Understanding Pod specifications is a crucial step in managing containerized applications within a Kubernetes environment.

## What is a Kubernetes Pod?

A Pod is the smallest deployable unit in Kubernetes. It represents a single instance of a running process in your cluster. A Pod can contain one or more containers, but for simplicity, we'll start by defining Pods with a single container. These containers share network and storage resources, and are always co-located and co-scheduled.

## YAML: The Language of Kubernetes Configuration

Kubernetes uses YAML (YAML Ain't Markup Language) to describe the desired state of your cluster objects. YAML is a human-readable data serialization format. For Kubernetes, this means we'll write files that tell Kubernetes *what* we want to run, and Kubernetes will work to make that *actual* state match our *desired* state.

## Essential Fields for a Pod Definition

When defining a Pod, several key fields are required. Let's break down a basic Pod definition.

### `apiVersion` and `kind`

These fields are fundamental to any Kubernetes object definition.
*   `apiVersion`: Specifies the Kubernetes API version being used for this object. For Pods, this is typically `v1`.
*   `kind`: Declares the type of Kubernetes object you are creating. In this case, it's `Pod`.

### `metadata`

This section contains data that helps uniquely identify the object.
*   `name`: A unique name for your Pod within its namespace. This name must be DNS-compliant.
*   `labels`: Key-value pairs that are used to organize and select groups of objects. Labels are very powerful for managing and querying your Kubernetes resources.

### `spec`

This is the core of the Pod definition, describing the desired state of the Pod.
*   `containers`: A list of container definitions that will run within the Pod.
    *   `name`: A unique name for the container within the Pod.
    *   `image`: The Docker image to use for this container. This can be an official image from Docker Hub or a custom image from your own registry.
    *   `ports`: (Optional) A list of network ports that the container exposes.
        *   `containerPort`: The port number that the container listens on.

## A Simple Pod Example

Let's look at a practical example of a Pod definition. This Pod will run a simple Nginx web server.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
  labels:
    app: nginx
spec:
  containers:
  - name: nginx-container
    image: nginx:latest
    ports:
    - containerPort: 80
```

**Explanation of the example:**

*   `apiVersion: v1`: We are using the core Kubernetes API version.
*   `kind: Pod`: We are defining a Pod.
*   `metadata.name: nginx-pod`: The name of our Pod will be `nginx-pod`.
*   `metadata.labels.app: nginx`: We are assigning a label `app` with the value `nginx` to this Pod. This could be used later to select this Pod, for example, when defining a Service.
*   `spec.containers`: We define one container.
*   `spec.containers[0].name: nginx-container`: The name of this container is `nginx-container`.
*   `spec.containers[0].image: nginx:latest`: We instruct Kubernetes to pull and run the `nginx` image, using the `latest` tag.
*   `spec.containers[0].ports`: We declare that this container will expose port `80`.

## Applying Your YAML Definition

Once you have your YAML file (e.g., `nginx-pod.yaml`), you would use the `kubectl` command-line tool to create the Pod in your Kubernetes cluster:

```bash
kubectl apply -f nginx-pod.yaml
```

Kubernetes will then read this definition and work to create the `nginx-pod` with an `nginx:latest` container running and exposing port 80.

## Common Pitfalls and Best Practices

*   **Typos and Indentation:** YAML is very sensitive to indentation. Incorrect spacing can lead to parsing errors. Always use spaces, not tabs, for indentation.
*   **Image Names:** Ensure the `image` name and tag are correct. If the image doesn't exist or the tag is wrong, your Pod will fail to start.
*   **Uniqueness of Names:** Pod names must be unique within a namespace.
*   **Resource Limits and Requests:** For production environments, always define `resources.limits` and `resources.requests` for your containers. This helps Kubernetes schedule your Pods effectively and prevents resource starvation. We will cover this in a future lesson.

By mastering the basic structure of a Pod definition, you've taken a significant step towards effectively managing your applications on Kubernetes.

## Supports

- [[skills/cloud-devops/platform-engineering/kubernetes/microskills/kubernetes-pod-definition|Kubernetes Pod Definition]]
