---
type: "medium"
title: "Constructing Pod Specifications with YAML"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/compute-runtime/kubernetes/microskills/pod-specification-construction|pod-specification-construction]]"
learning-time-in-minutes: 4
---
# Constructing Pod Specifications with YAML

This lesson focuses on the practical skill of building YAML manifests for Kubernetes Pods. Understanding how to correctly define a Pod using YAML is fundamental to deploying and managing applications on Kubernetes.

## What is a Pod Specification?

A Pod specification, often referred to as a "Pod definition" or "Pod manifest," is a YAML file that describes the desired state of a Pod. It tells Kubernetes what containers should run, how they should be configured, what resources they need, and other essential details for creating and running the Pod.

Think of it like a blueprint. You wouldn't build a house without a detailed plan, and you don't deploy an application to Kubernetes without defining its Pods.

## Core Components of a Pod Specification

A basic Pod specification includes several key fields:

*   **`apiVersion`**: Specifies the Kubernetes API version used for this object. For Pods, this is typically `v1`.
*   **`kind`**: Identifies the type of Kubernetes object. For Pods, this is `Pod`.
*   **`metadata`**: Contains data that helps uniquely identify the object, including its `name` and optional `labels`.
*   **`spec`**: This is the heart of the Pod definition, describing the desired state of the Pod.

    *   **`containers`**: A list of container definitions that will run within the Pod. Every Pod must have at least one container.
        *   **`name`**: A unique name for the container within the Pod.
        *   **`image`**: The Docker image to use for the container (e.g., `nginx:latest`, `ubuntu`).
        *   **`ports`**: (Optional) A list of ports that the container exposes.

## Applying YAML Rules for Pods: A Practical Example

Let's construct a simple YAML manifest for a Pod that runs the `nginx` web server.

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

Let's break down this example:

*   **`apiVersion: v1`**: We're using the stable Kubernetes API version for Pods.
*   **`kind: Pod`**: We are defining a Pod object.
*   **`metadata:`**:
    *   **`name: nginx-pod`**: This Pod will be named `nginx-pod`. Pod names must be unique within a namespace.
    *   **`labels:`**:
        *   **`app: nginx`**: We're applying a label `app` with the value `nginx`. Labels are key-value pairs used for organizing and selecting objects.
*   **`spec:`**:
    *   **`containers:`**: This section defines the containers that will run inside this Pod.
        *   **`- name: nginx-container`**: The first (and in this case, only) container in the Pod is named `nginx-container`.
        *   **`image: nginx:latest`**: This container will use the latest version of the official Nginx Docker image.
        *   **`ports:`**:
            *   **`- containerPort: 80`**: This tells Kubernetes that the `nginx-container` is listening on port `80` inside the Pod. This is informational for Kubernetes and other services.

## Common YAML Pitfalls for Pod Specifications

When writing YAML, indentation and syntax are crucial. Incorrect formatting can lead to a Pod that fails to start or is rejected by Kubernetes.

*   **Incorrect Indentation**: YAML relies heavily on whitespace. Inconsistent or incorrect indentation will cause parsing errors. Ensure you use spaces, not tabs, and maintain a consistent level of indentation for nested elements.
*   **Missing Required Fields**: Forgetting `apiVersion`, `kind`, or essential parts of `spec` (like `containers` or `image`) will prevent Kubernetes from understanding your definition.
*   **Typographical Errors**: Typos in field names (e.g., `apiVerson` instead of `apiVersion`) or image names will cause errors.
*   **Improper List Formatting**: When defining multiple items in a list (like `containers` or `ports`), each item must start with a hyphen (`-`) followed by a space, and be indented correctly.

## Applying Your Knowledge: Creating a New Pod Manifest

Now, try creating a YAML manifest for a Pod that runs a simple `busybox` container.

**Instructions:**

1.  Create a YAML file.
2.  Set the `apiVersion` to `v1`.
3.  Set the `kind` to `Pod`.
4.  Give your Pod a unique `name` in the `metadata` section (e.g., `my-busybox-pod`).
5.  Add a label, for instance, `app: busybox`.
6.  In the `spec` section, define a single container.
7.  Name this container `busybox-container`.
8.  Use the `busybox` image.
9.  Make the container sleep for a long time so it stays running (you can use a command like `sleep 3600`). This requires adding a `command` field to the container definition.

Your final YAML should look something like this, but with your chosen Pod name:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: your-unique-pod-name # Replace with your chosen name
  labels:
    app: busybox
spec:
  containers:
    - name: busybox-container
      image: busybox
      command: ["sleep", "3600"] # Keeps the container running for an hour
```

By successfully constructing this YAML, you've applied the core rules for defining Kubernetes Pods. This skill is the building block for deploying more complex applications.

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/kubernetes/microskills/pod-specification-construction|Pod Specification Construction]]
